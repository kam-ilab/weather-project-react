import "./App.css";
import Weather from "./Weather";
import React from "react";

function App() {
  return (
    <div className="App">
      <div className=" container">
        <Weather defaultCity="Johannesburg" />

        <footer>
          This project was coded by Kamila Baas and is
          <a
            href="https://github.com/kam-ilab/weather-project-react"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-sourced on GitHub
          </a>{" "}
          and{" "}
          <a
            href="https://deft-phoenix-d8de75.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            hosted on Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
