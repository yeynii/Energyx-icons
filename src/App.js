import {useState, useEffect} from "react";
import "./app.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Body from "./components/Body";
import {loadScript, loadStylesheet, makeURL} from "./common/functions";

function App({icomoonFiles}) {
  const [keyword, setKeyword] = useState('');
  const [files, setFiles] = useState([]);
  useEffect(() => {
    const stopSync = icomoonFiles.syncFiles((data) =>
        setFiles(data)
    );
    return () => stopSync();
  }, []);

  return (
      <div className="app">
        <Header files={files} setKeyword={setKeyword}/>
        <Body keyword={keyword}/>
        <Footer icomoonFiles={icomoonFiles} />
      </div>
  );
}

export default App;