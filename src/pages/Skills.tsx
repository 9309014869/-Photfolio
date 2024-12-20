import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code2, Database, Server, Globe, 
  Cpu, Cloud, Shield, Terminal 
} from 'lucide-react';
import SkillCard from '../components/SkillCard';

const skillCategories = [
  {
    Icon: Code2,
    title: 'Frontend Development',
    skills: 'React, TypeScript, Three.js, Next.js, Redux, Tailwind CSS',
    iconColor: 'text-blue-500'
  },
  {
    Icon: Server,
    title: 'Backend Development',
    skills: 'Node.js, Express, NestJS, GraphQL, REST APIs',
    iconColor: 'text-green-500'
  },
  {
    Icon: Database,
    title: 'Database',
    skills: 'MongoDB, PostgreSQL, Redis, Mongoose, TypeORM',
    iconColor: 'text-purple-500'
  },
  {
    Icon: Globe,
    title: 'Web Technologies',
    skills: 'HTML5, CSS3, JavaScript, WebSockets, PWAs',
    iconColor: 'text-yellow-500'
  },
  {
    Icon: Cpu,
    title: 'Development Tools',
    skills: 'Git, Docker, Webpack, Vite, Jest, CI/CD',
    iconColor: 'text-red-500'
  },
  {
    Icon: Cloud,
    title: 'Cloud Services',
    skills: 'AWS, Google Cloud, Vercel, Netlify, Heroku',
    iconColor: 'text-cyan-500'
  },
  {
    Icon: Shield,
    title: 'Security',
    skills: 'JWT, OAuth, HTTPS, API Security, Data Encryption',
    iconColor: 'text-indigo-500'
  },
  {
    Icon: Terminal,
    title: 'Other Skills',
    skills: 'Linux, Bash, Python, System Design, Agile',
    iconColor: 'text-pink-500'
  }
];

const Skills = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="pt-20 min-h-screen"
    >
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl font-bold mb-8 text-center bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            Technical Skills
          </h1>
          <p className="text-xl text-gray-400 text-center mb-16 max-w-3xl mx-auto">
            A comprehensive overview of my technical expertise and the technologies I work with
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((skill, index) => (
              <SkillCard key={index} {...skill} />
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Skills;