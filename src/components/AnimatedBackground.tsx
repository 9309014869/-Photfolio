import React from 'react';
import { motion } from 'framer-motion';
import TurbulentWave from './TurbulentWave';

const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-black">
      <TurbulentWave />

      {/* Animated Sphere */}
      <motion.div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 360],
        }}
        transition={{
          duration: 20,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        <div className="w-full h-full rounded-full bg-gradient-to-r from-yellow-400 to-yellow-300 shadow-lg" />
      </motion.div>

      {/* Grid Lines */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0wIDBoNjB2NjBIMHoiLz48cGF0aCBkPSJNNjAgMEgwdjYwaDYwVjB6TTU5IDFIMXY1OGg1OFYxeiIgZmlsbD0iIzIwMjAyMCIgZmlsbC1vcGFjaXR5PSIwLjA1Ii8+PC9nPjwvc3ZnPg==')] opacity-20" />

      {/* Floating Elements */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute"
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0.3, 0.6, 0.3],
            scale: [1, 1.2, 1],
            x: [0, 30, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 10,
            ease: "easeInOut",
            repeat: Infinity,
            delay: i * 2,
          }}
          style={{
            width: "200px",
            height: "200px",
            borderRadius: "40%",
            background: `linear-gradient(45deg, rgba(67, 56, 202, 0.1) 0%, rgba(99, 102, 241, 0.1) 100%)`,
            left: `${20 + i * 15}%`,
            top: `${30 + i * 10}%`,
            filter: "blur(40px)",
          }}
        />
      ))}
    </div>
  );
};

export default AnimatedBackground;