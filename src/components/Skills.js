import React from 'react';
import { motion } from 'framer-motion';

const categories = [
  { title: 'Frontend', items:['React','Tailwind','HTML','CSS'] },
  { title: 'Backend', items:['Node.js','Express.js','REST APIs'] },
  { title: 'Database', items:['MongoDB','Mongoose'] },
  { title: 'Languages', items:['JavaScript','C++'] },
  { title: 'Tools', items:['Git','Postman','VS Code'] },
]

export default function Skills(){
  return (
    <motion.section id="skills" className="container-max mx-auto my-8 p-6 glass" initial={{opacity:0, y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.6}}>
      <h2 className="text-2xl font-semibold text-white">Skills</h2>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
        {categories.map((c,i)=> (
          <motion.div key={c.title} whileHover={{ scale:1.03 }} className="p-4 glass card-elevate">
            <h4 className="text-white font-medium">{c.title}</h4>
            <ul className="mt-3 text-gray-300 space-y-2">
              {c.items.map(it=> <li key={it} className="flex items-center gap-3"><span className="w-2 h-2 bg-cyan-400 rounded-full"/> {it}</li>)}
            </ul>
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}
