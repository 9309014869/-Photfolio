import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';
import AnimatedBackground from '../components/AnimatedBackground';

const projects = [
  {
    image: 'https://images.unsplash.com/photo-1579547621113-e4bb2a19bdd6?auto=format&fit=crop&w=800&q=80',
    title: 'FuelNow',
    description: 'Real-time fuel delivery platform with location tracking and Razorpay payment integration.',
    tags: ['MongoDB', 'Express.js', 'React', 'Node.js', 'Google Maps', 'Razorpay'],
    demoUrl: 'https://demo.example.com',
    githubUrl: 'https://github.com'
  },
  {
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=800&q=80',
    title: 'InstaWeb',
    description: 'Social media platform with real-time notifications, WebRTC video calling, and infinite scroll.',
    tags: ['MongoDB', 'Express.js', 'React', 'Node.js', 'WebRTC', 'JWT'],
    demoUrl: 'https://demo.example.com',
    githubUrl: 'https://github.com'
  },
  {
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80',
    title: 'GymWeb',
    description: 'Comprehensive gym management platform providing integrated solutions for gym operations.',
    tags: ['MongoDB', 'Express.js', 'React', 'Node.js'],
    demoUrl: 'https://demo.example.com',
    githubUrl: 'https://github.com'
  },
  {
    image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=800&q=80',
    title: 'Streamify',
    description: 'Video streaming platform with user authentication and playlist management.',
    tags: ['EJS', 'MongoDB', 'Express.js', 'Node.js'],
    demoUrl: 'https://demo.example.com',
    githubUrl: 'https://github.com'
  },
  {
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80',
    title: 'EditoPro',
    description: 'VSCode IDE clone with file management and real-time code collaboration.',
    tags: ['EJS', 'MongoDB', 'Express.js', 'Node.js'],
    demoUrl: 'https://demo.example.com',
    githubUrl: 'https://github.com'
  },
  {
    image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80',
    title: 'Refokus',
    description: 'Responsive web application built with React.',
    tags: ['React'],
    demoUrl: 'https://demo.example.com',
    githubUrl: 'https://github.com'
  }
];

const Projects = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="pt-20 min-h-screen relative"
    >
      <AnimatedBackground />
      
      <section className="py-20 px-4 relative">
        <div className="max-w-6xl mx-auto">
          <motion.h1 
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-5xl font-bold mb-8 text-center bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent"
          >
            Featured Projects
          </motion.h1>
          <motion.p 
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-400 text-center mb-16 max-w-3xl mx-auto"
          >
            A showcase of my work in full-stack development and web applications
          </motion.p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Projects;