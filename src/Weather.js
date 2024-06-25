import React from "react";
import "./Weather.css";

export default function Weather() {
    return (
    <div className= "Weather">
        <form>
            <div className="row">
                <div className="col-9">
            <input 
            type="seacth" 
            placeholder="Enter a city.."
            className="form-control"
             />
             </div>
             <div className="col-3">
             <input type="submit" value="Search" 
             className="btn btn-primary" />
             </div>
             </div>
        </form>
        <h1>New York</h1>
        <ul>
            <li>Wednesday 07:00</li>
            <li>Mostly Cloudy</li>
        </ul>
        <div className="row">
        <div className="col-6">
            <img 
            src="https://ssl.gstatic.com/onebox/weather/64/sunny.png" 
            alt="Mostly Cloudy"
            />
            23°C
        </div>
        <div className="col-6">
        <ul>
            <li>Precipitation: 0%</li>
            <li>Humidity: 56%</li>
            <li>Wind: 5km/h</li>    
        </ul>
        </div>
        </div>
          
        </div>
    );
}