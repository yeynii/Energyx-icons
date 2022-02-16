import {useEffect, useState} from "react";
import "./app.css";
import Snackbar from "./components/Snackbar";
import Header from "./components/Header";
import {doCopy} from "./common/functions";

function App() {
  const [iconName, setIconName] = useState();
  const [code, setCode] = useState();
  const [copied, setCopied] = useState(false);
  const [ligatures, setLigatures] = useState([]);
  const [keyword, setKeyword] = useState('');

  const handleIconClick = (e) => {
    const selected = e.target.className;
    if (selected.slice(0, 5) === "icon-") {
      setIconName(selected.slice(5));
    }
  };

  const handleCopy = text => {
    doCopy(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 1000);
  }

  useEffect(() =>
          fetch('selection.json')
              .then(res => res.json())
              .then(jsonData => setLigatures(jsonData.icons.map(icon => icon.properties).map(property => property.ligatures)))
      ,[]);

  useEffect(() => {
    iconName && setCode(`<span className="icon-${iconName}"></span>`);
  }, [iconName]);

  return (
      <div className="app">
        <h2>Energyx Icons</h2>
        <Header setKeyword={setKeyword}/>
        <div className="energyx-icon">
          <div className="container" onClick={handleIconClick}>
            {ligatures.filter(val => val?.toLowerCase().indexOf(keyword.toLowerCase()) > -1).map((ligature, i) => {
                  const className = "icon-" + ligature
                  return <div key={i} className={className}/>
                }
            )}
          </div>
        </div>
        {iconName && (
            <>
              <div className="iconImg">{iconName}</div>
              <h3>
                name
                <div className="copy" onClick={() => handleCopy(iconName)}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path
                        d="M64 464H288C296.8 464 304 456.8 304 448V384H352V448C352 483.3 323.3 512 288 512H64C28.65 512 0 483.3 0 448V224C0 188.7 28.65 160 64 160H128V208H64C55.16 208 48 215.2 48 224V448C48 456.8 55.16 464 64 464zM160 64C160 28.65 188.7 0 224 0H448C483.3 0 512 28.65 512 64V288C512 323.3 483.3 352 448 352H224C188.7 352 160 323.3 160 288V64zM224 304H448C456.8 304 464 296.8 464 288V64C464 55.16 456.8 48 448 48H224C215.2 48 208 55.16 208 64V288C208 296.8 215.2 304 224 304z"/>
                  </svg>
                </div>
              </h3>
              <div>{iconName}</div>
              <h3>
                code
                <div className="copy" onClick={() => handleCopy(code)}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path
                        d="M64 464H288C296.8 464 304 456.8 304 448V384H352V448C352 483.3 323.3 512 288 512H64C28.65 512 0 483.3 0 448V224C0 188.7 28.65 160 64 160H128V208H64C55.16 208 48 215.2 48 224V448C48 456.8 55.16 464 64 464zM160 64C160 28.65 188.7 0 224 0H448C483.3 0 512 28.65 512 64V288C512 323.3 483.3 352 448 352H224C188.7 352 160 323.3 160 288V64zM224 304H448C456.8 304 464 296.8 464 288V64C464 55.16 456.8 48 448 48H224C215.2 48 208 55.16 208 64V288C208 296.8 215.2 304 224 304z"/>
                  </svg>
                </div>
              </h3>
              <div>{code}</div>
            </>
        )}
        {copied && <Snackbar/>}
      </div>
  );
}

export default App;
