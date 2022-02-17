import React from 'react';
import "./snackbar.css";

const Snackbar = ({text, ms}) => {
  return (
      <div className='snackbar' time={ms}>{text}</div>
  );
};

export default Snackbar;