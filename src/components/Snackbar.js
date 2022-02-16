import React from 'react';
import "./snackbar.css";

const Snackbar = ({message}) => {
    return(
        <div className='snackbar'>{message}</div>
    );
};

export default Snackbar;