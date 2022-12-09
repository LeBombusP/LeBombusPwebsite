import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaMoon, FaSun, FaUserCircle, FaHome, FaSignOutAlt } from 'react-icons/fa';
import '../assets/app.css';


function NavIcons(props) {
  const [dark, setDark] = useState(props.dark);
  const navigate = useNavigate();

  const toggle = () => {
    if (dark) {
      setDark(false);
    }
    else if (!dark) {
      setDark(true);
    }
  }
  
  const href = (to) => {
    navigate(to);
  }
  const out = () => {
    localStorage.removeItem('token');
  }

  useEffect(() => {
    document.body.classList.toggle('light-mode');
    localStorage.setItem('dark', dark.toString());
    if (!dark && !document.body.classList.contains('light-mode')) {
      document.body.classList.toggle('light-mode');
    }
  }, [dark]);

  const Icon = (dark) => {
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

  const Link = (link) => {
    if (link=="/dashboard") {
      return (
        <button className="imgct licon" onClick={() => href('/dashboard')}>
          <FaUserCircle className="Icon" size={42} />
        </button>
      )
    }
    else if (link=="/") {
      return (
        <button className="imgct licon" onClick={() => href('/')}>
          <FaHome className="Icon" size={42} />
        </button>
      )
    }
    else if (link=="out") {
      return (
        <button className="imgct licon" onClick={out}>
          <FaSignOutAlt className="Icon" size={42} />
        </button>
      )
    }
  }

  return (
    <>
      {Link(props.link)}
      {Icon(dark)}
    </>
  )
}

export default NavIcons;