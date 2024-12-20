import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

const socialLinks = [
  {
    Icon: Github,
    href: 'https://github.com/9309014869/',
    label: 'GitHub Profile'
  },
  {
    Icon: Linkedin,
    href: 'https://www.linkedin.com/in/tejas-kawarkhe-4658a7254/',
    label: 'LinkedIn Profile'
  },
  {
    Icon: Mail,
    href: 'tejas.kawarkhe@gmail.com',
    label: 'Email Contact'
  }
];

const ContactSection = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-t from-black to-gray-900">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">Let's Connect</h2>
        <div className="flex justify-center space-x-6">
          {socialLinks.map(({ Icon, href, label }) => (
            <motion.a 
              key={href}
              whileHover={{ scale: 1.1 }}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-800 rounded-full"
              aria-label={label}
            >
              <Icon className="w-6 h-6" />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;