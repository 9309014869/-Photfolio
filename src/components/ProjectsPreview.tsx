import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';
import { Link } from 'react-router-dom';

const previewProjects = [
  {
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=800&q=80',
    title: 'InstaWeb',
    description: 'Social media platform with real-time notifications, WebRTC video calling, and infinite scroll.',
    tags: ['MongoDB', 'Express.js', 'React', 'Node.js', 'WebRTC'],
    demoUrl: 'https://demo.example.com',
    githubUrl: 'https://github.com'
  },
  {
    image: 'https://cdn.prod.website-files.com/61645bffc0a23acedc2bdb2c/6187fdafdb90d56692d55e5e_Fuel%20Delivery%20-%20Home%20(3000%20x%202000).jpg',
    title: 'FuelNow',
    description: 'Real-time fuel delivery platform with location tracking and Razorpay payment integration.',
    tags: ['MongoDB', 'Express.js', 'React', 'Node.js', 'Google Maps'],
    demoUrl: 'https://demo.example.com',
    githubUrl: 'https://github.com'
  }
];

const ProjectsPreview = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {previewProjects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
        <div className="text-center">
          <Link to="/projects">
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-semibold"
            >
              View All Projects
            </motion.button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectsPreview;