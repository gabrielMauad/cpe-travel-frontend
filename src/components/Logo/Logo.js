import React from 'react';
import { FaRegPaperPlane } from 'react-icons/fa';
import './Logo.css';

function Logo() {
  return (
    <div className="containerLogo">
      <FaRegPaperPlane className="logo" />
      <p className="textLogo">CP& Travel</p>
    </div>
  );
}

export default Logo;
