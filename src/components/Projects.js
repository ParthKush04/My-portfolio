import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  { title: 'Job Portal with ATS Score Prediction', desc:'Full-stack job portal with ML-based ATS scoring and dashboards.', repo:'https://github.com/Suraj9954/Job-Portal', live:'' },
  { title: 'Syncly — Networking & Video Calls', desc:'Networking platform with video calls and realtime features (Stream API).', repo:'https://github.com/ParthKush04/Syncly', live:'https://syncly-six.vercel.app/' },
  { title: 'Code Reviewer', desc:'Automated code review tooling to give feedback and analysis.', repo:'https://github.com/ParthKush04/Code-Reviewer', live:'' },
  { title: 'Portfolio Website', desc:'This portfolio built with React and Tailwind.', repo:'https://github.com/ParthKush04', live:'' },
]

export default function Projects(){
  return (
    <motion.section id="projects" className="container-max mx-auto my-8 p-6" initial={{opacity:0, y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.6}}>
      <h2 className="text-2xl font-semibold text-white">Projects</h2>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((p,idx)=> (
          <motion.article key={p.title} whileHover={{ scale:1.02 }} className="p-5 glass card-elevate">
            <div className="h-40 bg-gradient-to-r from-indigo-700 to-cyan-600 rounded-lg mb-4" />
            <h3 className="text-xl text-white">{p.title}</h3>
            <p className="text-gray-300 mt-2">{p.desc}</p>
            <div className="mt-4 flex gap-3">
              <a href={p.repo} target="_blank" rel="noreferrer" className="text-sm px-3 py-2 bg-slate-800 rounded text-gray-200">View Repo</a>
              {p.live && p.live.trim() !== '' ? (
                <a href={p.live} target="_blank" rel="noreferrer" className="text-sm px-3 py-2 bg-gradient-to-r from-indigo-500 to-cyan-400 rounded text-black">Live Demo</a>
              ) : null}
            </div>
          </motion.article>
        ))}
      </div>
    </motion.section>
  )
}
