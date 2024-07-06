import React from "react";
import Weather from "./Weather";
import './App.css';

export default function App() {
return (
<div className="App">
  <div className= "container">
  <Weather defaultCity="New york" />
  
  <footer>
    This Project was coded by Maribel Boban and is
    {" "} 
  <a 
  href="https://github.com/mgaeta427/react-weather-app"
  target="_blank" 
  rel="noopener noreferrer"
  
  
  >
    open-sourced on GitHub
    </a>{" "}
    and{" "}
    <a
    href="https://exquisite-puffpuff-3f3fcf.netlify.com/"
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

