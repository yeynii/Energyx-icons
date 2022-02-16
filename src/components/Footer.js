import React, {useEffect, useState} from 'react';
import './footer.css';
import Snackbar from "./Snackbar";
import {getBase64} from "../common/functions";

const Footer = ({icomoonFiles}) => {
  const [files, setFiles] = useState([]);
  const [uploaded, setUploaded] =useState(false);

  const handleDrag = e => {
    e.stopPropagation();
    e.preventDefault();
    if (e.type === 'dragover')
      e.currentTarget.className = 'dragDrop over';
    else
      e.currentTarget.className = 'dragDrop';
  }

  const handleDrop = e => {
    e.preventDefault();
    e.stopPropagation();
    e.currentTarget.className = 'dragDrop';
    onChangeFiles(e);
  }

  const onChangeFiles = e => {
    let selectFiles = e.dataTransfer.files;
    for (const file of selectFiles) {
      getBase64(file).then(data => setFiles(prev => [...prev, {name: file.name, data: data}]))
    }
  }

  const handleUpload = async () => {
    files && await icomoonFiles.updateFiles(files);
    setUploaded(true);
    setFiles([]);
    setTimeout(() => setUploaded(false), 1000);
  }

  return (
      <div className="dragDrop"
           onDragEnter={handleDrag}
           onDragOver={handleDrag}
           onDragLeave={handleDrag}
           onDrop={handleDrop}>
        {files?.length > 0 ?
            <>
            {files.map((file, i) => <div key={i}>{file.name}</div>)}
              <button className="upload" onClick={handleUpload}>업로드</button>
            </>
            : "Drag & drop files(fonts, liga.js, selection.json, style.css) here!"}
        {uploaded && <Snackbar message="파일이 업로드 되었습니다"/>}
      </div>
  )
}

export default Footer;