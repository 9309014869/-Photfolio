import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Code2, Database } from 'lucide-react';
import SkillCard from './SkillCard';
import { Link } from 'react-router-dom';

const previewSkills = [
  {
    Icon: Terminal,
    title: 'Frontend Development',
    skills: 'React, TypeScript, Three.js, Tailwind CSS',
    iconColor: 'text-blue-500'
  },
  {
    Icon: Code2,
    title: 'Backend Development',
    skills: 'Node.js, Express, REST APIs',
    iconColor: 'text-green-500'
  },
  {
    Icon: Database,
    title: 'Database',
    skills: 'MongoDB, Mongoose, SQL',
    iconColor: 'text-purple-500'
  }
];

const SkillsPreview = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Tech Stack</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {previewSkills.map((skill, index) => (
            <SkillCard key={index} {...skill} />
          ))}
        </div>
        <div className="text-center">
          <Link to="/skills">
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full font-semibold"
            >
              View All Skills
            </motion.button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SkillsPreview;