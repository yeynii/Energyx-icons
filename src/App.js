import {useState} from "react";
import "./app.css";
import Header from "./components/Header";
import Body from "./components/Body";

function App() {
  const [keyword, setKeyword] = useState('');
  return (
      <div className="app">
        <Header setKeyword={setKeyword}/>
        <Body keyword={keyword}/>
      </div>
  );
}

export default App;