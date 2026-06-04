import React from 'react';
import { motion } from 'framer-motion';

export default function Experience(){
  return (
    <motion.section id="experience" className="container-max mx-auto my-8 p-6 glass" initial={{opacity:0, y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.6}}>
      <h2 className="text-2xl font-semibold text-white">Experience</h2>

      <div className="mt-6 space-y-6">
        <div className="border-l border-gray-800 pl-6">
          <div className="text-sm text-gray-300">2024 - 2024</div>
          <div className="text-white font-medium">MERN Stack Developer Intern — Provisioning Tech</div>
          <ul className="mt-2 text-gray-300 list-disc ml-5 space-y-1">
            <li>Developed and maintained a full-stack Internship Management System using the MERN Stack (MongoDB, Express.js, React.js, Node.js).</li>
            <li>Designed and implemented responsive user interfaces to provide a seamless experience for students, administrators, and recruiters.</li>
            <li>Built RESTful APIs for internship applications, user management, authentication, and data handling.</li>
            <li>Integrated MongoDB for efficient storage and retrieval of internship-related data.</li>
            <li>Implemented secure authentication and authorization mechanisms to protect user information.</li>
            <li>Collaborated with the development team to analyze requirements, develop features, and resolve technical issues.</li>
            <li>Successfully deployed the application, ensuring reliable performance and accessibility for end users.</li>
            <li>Participated in testing, debugging, and optimization to improve system stability and user experience.</li>
          </ul>
        </div>

      </div>
    </motion.section>
  )
}
