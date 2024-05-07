import logo from "./logo.svg";
import "./App.css";
import Weather from "./Weather.js";
import React from "react";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Weather defaultCity="Johannesburg" />
      <footer>
        This project was coded by Kamila Baas and is
        <a href="#" target="_blank" rel="noopener noreferrer">
          open-sourced on GitHub
        </a>{" "}
        and <a href="#">hosted on Netlify</a>
      </footer>
    </div>
  );
}

export default App;
