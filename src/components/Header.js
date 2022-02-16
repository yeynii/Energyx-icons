import React from 'react';
import './header.css';
import {downloadFile} from "../common/functions";

const Header = ({files, setKeyword}) => {
  const handleKeyword = e => {
    setKeyword(e.target.value);
  }

  const handleDownload = () => {
    for (const file of files){
      downloadFile(file);
    }
  }

  return(
      <header>
        <h2>Energyx Icons</h2>
        <div className="tools">
          <input onChange={handleKeyword} placeholder="Search..."/>
          <div>
            <button className="button" onClick={handleDownload} >다운로드</button>
            <button className="button" onClick={() => window.open('//icomoon.io/app/#/projects')}>Icomoon</button>
          </div>
        </div>
      </header>
  )
};

export default Header;