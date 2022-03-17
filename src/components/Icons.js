import React, {useState} from 'react';
import {doCopy} from "../common/functions";
import './icons.css';

const Icons = ({ligature, handleIconClick}) => {
  const [visibility, setVisibility] = useState(false);
  const [innerText, setInnerText] = useState(ligature);
  const handleMouseOverOut = () => {
    setVisibility(prev => !prev);
  }

  const handleCopy = () => {
    handleIconClick(ligature);
    doCopy(ligature);
    setInnerText('copied!');
    setTimeout(() => setInnerText(ligature), 1000);
  }
  return (
      <div className="xicon- positioner"
           onClick={handleCopy}
           onMouseOver={handleMouseOverOut}
           onMouseOut={handleMouseOverOut}>
        {ligature}
        <span className="detail" style={visibility ? {display: "inherit"} : {display: "none"}}>{innerText}</span>
      </div>
  )
};

export default Icons;