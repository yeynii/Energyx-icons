import React, {useEffect, useState} from 'react';
import './body.css';
import Snackbar from "./Snackbar";
import {doCopy} from "../common/functions";
import Icons from "./Icons";
import useSnackbar from '../common/useSnackbar';

const Body = ({keyword}) => {
  const [iconName, setIconName] = useState();
  const [classEx, setClassEx] = useState();
  const [ligatureEx, setLigatureEx] = useState();
  const [ligatures, setLigatures] = useState([]);
  const [snackbarMessage, setSnackbarMesssage] = useSnackbar(1000);

  const handleIconClick = ligature => {
    setIconName(ligature);
  };

  const handleCopy = text => {
    doCopy(text);
    setSnackbarMesssage("복사되었습니다");
  }

  useEffect(() =>
          fetch('selection.json')
              .then(res => res.json())
              .then(jsonData => setLigatures(jsonData.icons.map(icon => icon.properties).map(property => property.ligatures)))
      , []);

  useEffect(() => {
//    iconName && setLigatureEx("<span className=\"xicon>\n" + iconName + "</span>");
    iconName && setLigatureEx(`<span className="xicon-">\n${iconName}\n</span>`);
    iconName && setClassEx(`<span className="xicon-${iconName}"></span>`);
  }, [iconName]);

  return (
      <div className="body">
        <div className="energyx-icon">
          <div className="container">
            {ligatures
                .filter(val => val?.toLowerCase()
                    .indexOf(keyword.toLowerCase()) > -1)
                .map((ligature, i) => <Icons key={i} ligature={ligature} handleIconClick={handleIconClick}/>
                )}
          </div>
        </div>

        {iconName && (
            <div className="examples">
              <div className="xicon- iconImg">{iconName}</div>
              <h3>
                name
                <div className="copy" onClick={() => handleCopy(ligatureEx)}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path
                        d="M64 464H288C296.8 464 304 456.8 304 448V384H352V448C352 483.3 323.3 512 288 512H64C28.65 512 0 483.3 0 448V224C0 188.7 28.65 160 64 160H128V208H64C55.16 208 48 215.2 48 224V448C48 456.8 55.16 464 64 464zM160 64C160 28.65 188.7 0 224 0H448C483.3 0 512 28.65 512 64V288C512 323.3 483.3 352 448 352H224C188.7 352 160 323.3 160 288V64zM224 304H448C456.8 304 464 296.8 464 288V64C464 55.16 456.8 48 448 48H224C215.2 48 208 55.16 208 64V288C208 296.8 215.2 304 224 304z"/>
                  </svg>
                </div>
              </h3>
              <div className="ligatureEx">{ligatureEx}</div>
              <h3>
                code
                <div className="copy" onClick={() => handleCopy(classEx)}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path
                        d="M64 464H288C296.8 464 304 456.8 304 448V384H352V448C352 483.3 323.3 512 288 512H64C28.65 512 0 483.3 0 448V224C0 188.7 28.65 160 64 160H128V208H64C55.16 208 48 215.2 48 224V448C48 456.8 55.16 464 64 464zM160 64C160 28.65 188.7 0 224 0H448C483.3 0 512 28.65 512 64V288C512 323.3 483.3 352 448 352H224C188.7 352 160 323.3 160 288V64zM224 304H448C456.8 304 464 296.8 464 288V64C464 55.16 456.8 48 448 48H224C215.2 48 208 55.16 208 64V288C208 296.8 215.2 304 224 304z"/>
                  </svg>
                </div>
              </h3>
              <div>{classEx}</div>
            </div>
        )}
        {snackbarMessage &&
            <Snackbar key={Math.random()} text={snackbarMessage} time={1000} setMessage={setSnackbarMesssage}/>}
      </div>
  )
}

export default Body;