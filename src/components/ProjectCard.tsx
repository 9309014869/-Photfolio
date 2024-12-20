import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

interface ProjectCardProps {
  image: string;
  title: string;
  description: string;
  tags: string[];
  demoUrl: string;
  githubUrl: string;
}

const ProjectCard = ({ image, title, description, tags, demoUrl, githubUrl }: ProjectCardProps) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5 }}
      className="rounded-xl overflow-hidden bg-gray-800/50 backdrop-blur-md border border-gray-700/50"
    >
      <div className="relative group">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center space-x-4">
          <motion.a 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            href={demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-white/20 rounded-full hover:bg-white/30 transition-colors backdrop-blur-sm"
          >
            <ExternalLink className="w-6 h-6" />
          </motion.a>
          <motion.a 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-white/20 rounded-full hover:bg-white/30 transition-colors backdrop-blur-sm"
          >
            <Github className="w-6 h-6" />
          </motion.a>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-3 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
          {title}
        </h3>
        <p className="text-gray-300 mb-4 leading-relaxed">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <motion.span 
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="px-3 py-1 bg-gray-700/50 backdrop-blur-sm rounded-full text-sm font-medium text-gray-300
                       border border-gray-600/50 hover:border-gray-500/50 transition-colors"
            >
              {tag}
            </motion.span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;