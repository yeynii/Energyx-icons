import React, {useEffect} from 'react';
import './header.css';
import {download} from "../common/functions";

const Header = ({setKeyword}) => {
  let files = [];
  const paths = [
    'selection.json',
    'liga.js',
    'style.css',
    'fonts/energyx.eot',
    'fonts/energyx.svg',
    'fonts/energyx.ttf',
    'fonts/energyx.woff'
  ]

  useEffect(() => {
    for (const path of paths)
      fetch(path)
          .then(res => res.blob())
          .then(blob => files.push({path, file: blob}))
  }, []);

  const handleKeyword = e => {
    setKeyword(e.target.value);
  }

  const handleDownload = () => {
    let zip = new window.JSZip();
    for (const f of files) {
      zip.file(f.path, f.file);
    }
    zip.generateAsync({type: "blob", compression: "DEFLATE"})
        .then(content => {
          const filename = "iconpack.zip"
          download(content, filename)
        })
        .catch(console.error)
  }

  return (
      <header>
        <h2>Energyx Icons</h2>
        <div className="tools">
          <input onChange={handleKeyword} placeholder="Search..."/>
          <div>
            <button className="button" onClick={handleDownload}>다운로드</button>
            <button className="button" onClick={() => window.open('//icomoon.io/app/#/projects')}>Icomoon</button>
          </div>
        </div>
      </header>
  )
};

export default Header;
