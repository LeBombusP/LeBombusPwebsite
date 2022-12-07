import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaMoon, FaSun, FaUserCircle } from 'react-icons/fa';
import '../assets/app.css';


function NavIcons() {
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
    <div className="page">
    <button className="imgct licon" onClick={href}>
      <FaUserCircle className="Icon" size={42} />
    </button>
    {Icon()}
    </div>
  )
}

export default NavIcons;