import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaMoon, FaSun, FaUserCircle } from 'react-icons/fa';
import { motion } from 'framer-motion';
import '../assets/app.css';



function App() { 
  
  const [dark, setDark] = useState(false);
  const navigate = useNavigate();

  const toggle = () => {
    if (dark) {
      setDark(false);
    }
    else {
      setDark(true);
    }
  }

  const href = () => {
    navigate('/dashboard');
  }

  useEffect(() => {
    document.body.classList.toggle('light-mode');
  }, [dark]);

  function Icon() {
    if (dark) {
      return (
        <div className="imgct ricon" onClick={() => toggle()}>
          <FaMoon className="Icon" size={38} />
        </div>
      )
    }
    return (
      <div className="imgct ricon" onClick={() => toggle()}>
        <FaSun className="Icon" size={42} />
      </div>
    )
  }
  return (
    <motion.div className='App' initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>
    <main>
      <div className="page">
      <button className="imgct licon" onClick={href}>
        <FaUserCircle className="Icon" size={42} />
      </button>
      {Icon()}
      <h1 className="lebombusp">LeBombusP</h1>
      </div>
    </main>
    </motion.div>
  )
}
// TODO: Get Icons to components as navbar 
export default App;