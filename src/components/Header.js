import React from 'react';
import './header.css';
import {downloadURI} from "../common/functions";

const Header = ({setKeyword}) => {
  const handleKeyword = e => {
    setKeyword(e.target.value);
  }

  const handleDownload = () => {
    const files = [
      {path:'/selection.json',name:'selection.json'},
      {path:'/liga.js',name:'liga.js'},
      {path:'/style.css',name:'style.css'},
      {path:'/fonts/icomoon.eot',name:'icommon.eot'},
      {path:'/fonts/icomoon.svg',name:'icomoon.svg'},
      {path:'/fonts/icomoon.ttf',name:'icomoon.ttf'},
      {path:'/fonts/icomoon.woff',name:'icomoon.woff'}
    ]
    for (const file of files){
      downloadURI(file.path,file.name);
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