import React from 'react';
import { motion } from 'framer-motion';

export default function Contact(){
  return (
    <motion.section id="contact" className="container-max mx-auto my-8 p-6 glass" initial={{opacity:0, y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.6}}>
      <h2 className="text-2xl font-semibold text-white">Contact</h2>
      <div className="mt-6 md:flex gap-6">
        <form className="md:w-2/3 space-y-4">
          <input placeholder="Your name" className="w-full p-3 bg-transparent border border-gray-700 rounded text-white" />
          <input placeholder="Email" className="w-full p-3 bg-transparent border border-gray-700 rounded text-white" />
          <textarea placeholder="Message" rows="5" className="w-full p-3 bg-transparent border border-gray-700 rounded text-white" />
          <button className="px-5 py-3 bg-gradient-to-r from-indigo-500 to-cyan-400 rounded text-black font-medium">Send Message</button>
        </form>

        <div className="md:w-1/3">
          <div className="p-4 glass card-elevate">
            <h4 className="text-white font-medium">Get in touch</h4>
            <p className="text-gray-300 mt-2">Email: parth26094044@gmail.com</p>
            <p className="text-gray-300 mt-2">LinkedIn: <a href="https://www.linkedin.com/in/parth-kushwaha-5ab7b824a/" className="text-cyan-300">Profile</a></p>
            <p className="text-gray-300 mt-2">GitHub: <a href="https://github.com/ParthKush04" className="text-cyan-300">ParthKush04</a></p>
          </div>
        </div>
      </div>
    </motion.section>
  )
}
