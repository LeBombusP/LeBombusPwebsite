import React, { useState, useEffect } from 'react';
import NavIcons from '../components/navIcons';
import { motion } from 'framer-motion';
import '../assets/app.css';



function App() { 
  const dark: boolean = localStorage.getItem('dark') === 'true';

  
  console.log(dark);
  return (
    <motion.div className='App' initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>
    <main>
      <NavIcons dark={dark} link={"/dashboard"} />
      <h1 className="lebombusp">LeBombusP</h1>
    </main>
    </motion.div>
  )
}
// TODO: Get Icons to components as navbar 
export default App;