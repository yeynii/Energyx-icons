import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import IcomoonFiles from './service/icomoon_files';

const icomoonFiles = new IcomoonFiles();

ReactDOM.render(
  <React.StrictMode>
    <App icomoonFiles={icomoonFiles}/>
  </React.StrictMode>,
  document.getElementById('root')
);