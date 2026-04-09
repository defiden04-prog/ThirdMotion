import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Navbar({ avatarUrl }) {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-50 px-5 md:px-10 py-4 flex items-center justify-between bg-background/80 backdrop-blur-md"
    >
      <a href="#top" className="flex items-center gap-2.5 border border-border rounded-full pl-1.5 pr-4 py-1.5 bg-card hover:bg-secondary transition-colors">
        <img
          src={avatarUrl}
          alt="LeonMotion"
          className="w-8 h-8 rounded-full object-cover"
        />
        <span className="text-sm font-semibold tracking-tight text-foreground">LeonMotion</span>
      </a>

      <a
        href="#contact"
        className="flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-full text-sm font-medium hover:opacity-90 transition-opacity"
      >
        Get Started
        <ArrowRight className="w-4 h-4" />
      </a>
    </motion.nav>
  );
}
