import { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [result, setResult] = useState("");
  useEffect(() => {
    return fetch("/api/hello")
      .then((response) => response.json())
      .then((responseJson) => {
        setResult(responseJson.message);
      });
  });
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{result}</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
