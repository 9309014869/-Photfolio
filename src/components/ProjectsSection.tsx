import React from 'react';
import ProjectCard from './ProjectCard';

const projects = [
  {
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80',
    title: 'E-Commerce Platform',
    description: 'Full-stack MERN application with authentication and payment integration'
  },
  {
    image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=800&q=80',
    title: 'Real-time Chat Application',
    description: 'WebSocket-based chat app with real-time messaging and file sharing'
  },{
    image:'https://content-management-files.canva.com/cdn-cgi/image/f=auto,q=70/68a1dad6-7253-424b-8803-3a9e254c47e1/photo-editor_hero_mobile2x.png',
      title: 'Image Editor',
    description: 'Canvas based app with real-time Image editor with MASK Uplod on cloud'
  }
];

const ProjectsSection = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
            
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;