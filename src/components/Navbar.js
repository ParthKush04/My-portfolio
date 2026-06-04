import React from 'react';
import { motion } from 'framer-motion';

export default function Navbar(){
  return (
    <motion.nav className="fixed left-0 right-0 top-4 z-50 container-max glass px-6 py-3 flex items-center justify-between"
      initial={{ y: -30, opacity:0 }}
      animate={{ y:0, opacity:1 }}
      transition={{ duration: 0.6 }}>
      <div className="text-white font-semibold">Parth<span className="text-cyan-400">.</span></div>
      <div className="hidden md:flex gap-6 text-sm text-gray-200">
        <a href="#projects" className="hover:text-white">Projects</a>
        <a href="#skills" className="hover:text-white">Skills</a>
        <a href="#experience" className="hover:text-white">Experience</a>
        <a href="#contact" className="hover:text-white">Contact</a>
      </div>
      <div className="md:hidden text-gray-200">☰</div>
    </motion.nav>
  )
}
