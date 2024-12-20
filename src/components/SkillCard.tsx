import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface SkillCardProps {
  Icon: LucideIcon;
  title: string;
  skills: string;
  iconColor: string;
}

const SkillCard = ({ Icon, title, skills, iconColor }: SkillCardProps) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.05 }}
      className="p-6 rounded-xl bg-gray-800/50 backdrop-blur-lg border border-gray-700/50 
                hover:border-gray-600/50 transition-colors"
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <Icon className={`w-12 h-12 mb-4 ${iconColor}`} />
      </motion.div>
      <h3 className="text-xl font-bold mb-3 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
        {title}
      </h3>
      <p className="text-gray-300 leading-relaxed">{skills}</p>
    </motion.div>
  );
};

export default SkillCard;