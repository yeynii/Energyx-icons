import React, {useState} from 'react';
import './icons.css';

const Icons = ({ligature, handleIconClick}) => {
  const className = "icon-" + ligature
  const [visibility, setVisibility] = useState(false);
  const [innerText, setInnerText] = useState(ligature);
  const handleMouseOverOut = () => {
    setVisibility(prev => !prev);
  }

  const handleCopy = () => {
    handleIconClick(ligature);
    setInnerText('copied!');
    setTimeout(() => setInnerText(ligature), 1000);
  }
  return (
      <div className={`${className} positioner`}
           onClick={handleCopy}
           onMouseOver={handleMouseOverOut}
           onMouseOut={handleMouseOverOut}>
        <span className="detail" style={visibility ? {display:"inherit"}:{display: "none"}}>{innerText}</span>
      </div>
  )
};

export default Icons;