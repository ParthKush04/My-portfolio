import React from 'react';
import { motion } from 'framer-motion';

const typingWords = ["Full-Stack MERN Developer","React • Node • MongoDB","DSA Enthusiast"];

function Typing({words}){
  const [index, setIndex] = React.useState(0);
  const [sub, setSub] = React.useState('');
  React.useEffect(()=>{
    let mounted=true;
    const word = words[index%words.length];
    let i=0;
    const t = setInterval(()=>{
      if(!mounted) return;
      setSub(word.slice(0,i+1));
      i++;
      if(i>=word.length){
        setTimeout(()=>{ setIndex(idx=>idx+1) }, 900);
        clearInterval(t);
      }
    },60);
    return ()=>{ mounted=false; clearInterval(t); }
  },[index, words]);
  return <span className="text-cyan-300 type-cursor">{sub}</span>
}

export default function Hero(){
  return (
    <header className="pt-28 pb-14">
      <div className="container-max mx-auto grid md:grid-cols-2 gap-8 items-center">
        <motion.div className="text-white"
          initial={{ opacity:0, x:-20 }} whileInView={{ opacity:1, x:0 }} viewport={{once:true}} transition={{duration:0.7}}>
          <p className="text-sm text-gray-300 mb-2">Hello, my name is</p>
          <h1 className="text-4xl md:text-6xl font-semibold leading-tight">Parth <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-300">Kushwaha</span></h1>
          <h2 className="mt-3 text-xl text-gray-300"> <Typing words={typingWords} /> </h2>
          <p className="mt-6 text-gray-300 max-w-xl">I build elegant, high-performance web applications with the MERN stack. I focus on clean UI, scalable APIs and delightful user experiences.</p>

          <div className="mt-8 flex gap-4">
            <a href="#projects" className="px-5 py-3 rounded-lg glass text-white card-elevate magnetic">View Projects</a>
            <a href="/resume.pdf" download className="px-5 py-3 rounded-lg bg-gradient-to-r from-indigo-500 to-cyan-400 text-black font-medium">Download Resume</a>
            <a href="#contact" className="px-4 py-3 rounded-lg border border-gray-700 text-gray-200">Contact Me</a>
          </div>
        </motion.div>

        <motion.div className="flex justify-center md:justify-end" initial={{ opacity:0, x:20 }} whileInView={{ opacity:1, x:0 }} viewport={{once:true}} transition={{duration:0.8}}>
          <div className="w-56 h-56 md:w-72 md:h-72 rounded-2xl overflow-hidden card-elevate glass flex items-center justify-center">
            <img src={require('../Parth_Kushwaha.jpeg')} alt="Parth" className="w-full h-full object-cover transform hover:scale-105 transition" />
          </div>
        </motion.div>

      </div>
    </header>
  )
}
