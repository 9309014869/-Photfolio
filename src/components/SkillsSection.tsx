import React from 'react';
import { Terminal, Code2, Database  } from 'lucide-react';
import SkillCard from './SkillCard';

const skills = [
  {
    Icon: Terminal,
    title: 'Frontend Development',
    skills: 'React, TypeScript, Three.js, Tailwind CSS,JWt Auth',
    iconColor: 'text-blue-500'
  },
  {
    Icon: Code2,
    title: 'Backend Development',
    skills: 'Node.js, Express, REST APIs,WebRTC,Socket',
    iconColor: 'text-green-500'
  },
  {
    Icon: Database,
    title: 'Database',
    skills: 'MongoDB, Mongoose, SQL,PostgreSQL,',
    iconColor: 'text-purple-500'
  },

];

const SkillsSection = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Tech Stack</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <SkillCard key={index} {...skill} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;