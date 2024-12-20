import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';
import ContactForm from '../components/ContactForm';

const socialLinks = [
  {
    Icon: Github,
    href: 'https://github.com',
    label: 'GitHub Profile',
    color: 'hover:text-purple-500'
  },
  {
    Icon: Linkedin,
    href: 'https://linkedin.com',
    label: 'LinkedIn Profile',
    color: 'hover:text-blue-500'
  },
  {
    Icon: Twitter,
    href: 'https://twitter.com',
    label: 'Twitter Profile',
    color: 'hover:text-sky-500'
  },
  {
    Icon: Mail,
    href: 'mailto:your.email@example.com',
    label: 'Email Contact',
    color: 'hover:text-pink-500'
  }
];

const Contact = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="pt-20 min-h-screen"
    >
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-8 bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent">
            Let's Connect
          </h1>
          <p className="text-xl text-gray-400 mb-12">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
          </p>
          
          <div className="flex justify-center space-x-8 mb-16">
            {socialLinks.map(({ Icon, href, label, color }) => (
              <motion.a
                key={href}
                whileHover={{ scale: 1.1 }}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-4 bg-gray-800/50 backdrop-blur-sm rounded-full transition-colors ${color}`}
                aria-label={label}
              >
                <Icon className="w-8 h-8" />
              </motion.a>
            ))}
          </div>

          <ContactForm />
        </div>
      </section>
    </motion.div>
  );
};

export default Contact;