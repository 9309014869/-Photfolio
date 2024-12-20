import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import twilio from 'twilio';
import { z } from 'zod';

dotenv.config();

const app = express();

// Middleware
app.use(cors({
  origin: 'http://localhost:5173', // Vite's default port
  methods: ['POST'],
  credentials: true
  
}));
app.use(express.json());

// Debugging: Ensure environment variables are loaded
if (!process.env.TWILIO_ACCOUNT_SID || !process.env.TWILIO_AUTH_TOKEN || !process.env.TWILIO_PHONE_NUMBER || !process.env.YOUR_PHONE_NUMBER) {
  console.error('Environment variables are missing. Please check your .env file.');
  process.exit(1);
}

// Initialize Twilio client
const twilioClient = twilio(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
);

// Input validation schema
const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  message: z.string().min(10, 'Message must be at least 10 characters')
});

// Contact form endpoint
app.post('/api/contact', async (req, res) => {
  try {
    // Log incoming request for debugging
    console.log('Incoming Request Body:', req.body);

    // Validate input
    const { name, email, message } = contactSchema.parse(req.body);

    // Send SMS via Twilio
    const twilioMessage = await twilioClient.messages.create({
      body: `New Contact Form Submission\n\nName: ${name}\nEmail: ${email}\nMessage: ${message}`,
      from: process.env.TWILIO_PHONE_NUMBER,
      to: process.env.YOUR_PHONE_NUMBER
    });

    console.log('Message sent:', twilioMessage.sid);
    res.json({ success: true, message: 'Message sent successfully' });
  } catch (error) {
    console.error('Error:', error);

    // Handle validation errors
    if (error instanceof z.ZodError) {
      return res.status(400).json({
        success: false,
        error: error.errors[0].message
      });
    }

    // Handle Twilio errors
    if (error.code) {
      return res.status(500).json({
        success: false,
        error: 'Failed to send message. Please try again later.'
      });
    }

    // Handle other errors
    res.status(500).json({
      success: false,
      error: 'Internal server error'
    });
  }
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    error: 'Something went wrong!'
  });
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
