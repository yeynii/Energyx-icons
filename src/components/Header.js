import React from 'react';
import './header.css';
import {downloadURI} from "../common/functions";

const Header = ({setKeyword}) => {
  const handleKeyword = e => {
    setKeyword(e.target.value);
  }
  return(
      <header>
        <input onChange={handleKeyword} placeholder="Search..."/>
        <div>
          <button onClick={() => downloadURI('/selection.json','selection.json')} >json다운로드</button>
          <button onClick={() => window.open('//icomoon.io/app/#/projects')}>Icomoon</button>
        </div>
      </header>
  )
};

export default Header;