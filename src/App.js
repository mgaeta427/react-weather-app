import React from "react";
import Weather from "./Weather";
import './App.css';

export default function App() {
return (
<div className="App">
  <div className= "container">
  <Weather defaultCity="New York" />
  
  <footer>
    This Project was coded by{" "} 
  <a 
  href="https://github.com/mgaeta427"
  target="_blank" 
  rel="noopener noreferrer"
   >
    Maribel Boban
    </a>{" "}
    and is {" "}
    <a
    href="https://github.com/mgaeta427/react-weather-app"
    target="_blank"
    rel="noopener noreferrer"
    >
    open-sourced on GitHub
    </a> {" "}
    and{" "}
    <a
    href="https://my-favorite-weather-app.netlify.app/"
    target="_blank"
    rel="noopemer noreferrer"
    >
      hosted on Netlify
    </a>
  </footer>
  </div>
  </div>
);       
}

