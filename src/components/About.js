import React from 'react';
import { motion } from 'framer-motion';

export default function About(){
  return (
    <motion.section id="about" className="container-max mx-auto glass my-8 p-6" initial={{opacity:0, y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.6}}>
      <div className="md:flex gap-6 items-center">
        <div className="md:w-2/3">
          <h2 className="text-2xl font-semibold text-white">About Me</h2>
          <p className="mt-3 text-gray-300">I'm a MERN stack developer and Electrical Engineering student at MNNIT. I specialize in building performant full-stack applications and solving complex algorithmic problems. I enjoy collaborating on meaningful projects and creating polished user experiences.</p>
        </div>

        <div className="md:w-1/3 mt-6 md:mt-0 grid grid-cols-1 gap-4">
          <div className="p-4 glass card-elevate">
            <h4 className="text-sm text-gray-300">Projects Built</h4>
            <p className="text-2xl font-semibold text-white">12+</p>
          </div>
          <div className="p-4 glass card-elevate">
            <h4 className="text-sm text-gray-300">Technologies Used</h4>
            <p className="text-2xl font-semibold text-white">MERN, Tailwind, Framer</p>
          </div>
          <div className="p-4 glass card-elevate">
            <h4 className="text-sm text-gray-300">Problem Solving</h4>
            <p className="text-2xl font-semibold text-white">600+ Problems</p>
          </div>
        </div>
      </div>

      <div className="mt-6">
        <h3 className="text-lg font-semibold text-white">Education & Timeline</h3>
        <div className="mt-3 border-l border-gray-800 pl-4">
          <div className="mb-4">
            <div className="text-sm text-gray-300">2023 - Present</div>
            <div className="text-white">B.Tech — Electrical Engineering, MNNIT Allahabad</div>
          </div>
          <div>
            <div className="text-sm text-gray-300">Internship</div>
            <div className="text-white">MERN Stack Developer Intern — Provisioning Tech</div>
          </div>
        </div>
      </div>
    </motion.section>
  )
}
