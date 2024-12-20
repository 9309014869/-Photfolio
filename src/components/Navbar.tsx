import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code, Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-black/80 backdrop-blur-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/">
          <motion.div 
  whileHover={{ scale: 1.1 }}
  className="flex items-center space-x-2"
>
  <Code className="w-8 h-8 text-blue-500" />
  <motion.span 
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5 }}
    className="text-xl font-bold"
  >
    Tejas Kawarkhe
  </motion.span>
</motion.div>
          </Link>
          
          <div className="hidden md:flex space-x-8">
            <NavLink to="/" active={location.pathname === "/"}>Home</NavLink>
            <NavLink to="/skills" active={location.pathname === "/skills"}>Skills</NavLink>
            <NavLink to="/projects" active={location.pathname === "/projects"}>Projects</NavLink>
            <NavLink to="/contact" active={location.pathname === "/contact"}>Contact</NavLink>
          </div>

          <button 
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black/90 backdrop-blur-lg"
          >
            <div className="px-4 py-4 space-y-4">
              <MobileNavLink to="/" active={location.pathname === "/"} onClick={() => setIsOpen(false)}>
                Home
              </MobileNavLink>
              <MobileNavLink to="/skills" active={location.pathname === "/skills"} onClick={() => setIsOpen(false)}>
                Skills
              </MobileNavLink>
              <MobileNavLink to="/projects" active={location.pathname === "/projects"} onClick={() => setIsOpen(false)}>
                Projects
              </MobileNavLink>
              <MobileNavLink to="/contact" active={location.pathname === "/contact"} onClick={() => setIsOpen(false)}>
                Contact
              </MobileNavLink>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

const NavLink = ({ to, active, children }: { to: string; active: boolean; children: React.ReactNode }) => (
  <Link to={to}>
    <motion.span
      whileHover={{ scale: 1.1 }}
      className={`${
        active ? 'text-blue-500' : 'text-gray-300'
      } hover:text-white transition-colors`}
    >
      {children}
    </motion.span>
  </Link>
);

const MobileNavLink = ({ 
  to, 
  active, 
  children, 
  onClick 
}: { 
  to: string; 
  active: boolean; 
  children: React.ReactNode;
  onClick: () => void;
}) => (
  <Link to={to} onClick={onClick}>
    <motion.div
      whileTap={{ scale: 0.95 }}
      className={`${
        active ? 'bg-blue-500/20 text-blue-500' : 'text-gray-300'
      } p-3 rounded-lg transition-colors`}
    >
      {children}
    </motion.div>
  </Link>
);

export default Navbar;