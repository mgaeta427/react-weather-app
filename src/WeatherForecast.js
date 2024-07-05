import React, { useState, useEffect } from "react";
import "./WeatherForecast.css";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props) {
    let [loaded, setLoaded] = useState(false);
    let [forecast, setForecast] = useState(null);

    useEffect(() => {
        setLoaded(false);
    },    [props.coordinates]);
     


    function handleResponse(response) {
        setLoaded(true);
        setForecast(response.data.daily);
    }


    if (loaded) {
        return (
       <div className="WeatherForecast">
           <div className="row">
           {forecast.map(function (dailyForecast, index) {
               if (index < 5) {
               return (
                <div className="col" key={index}>
               <WeatherForecastDay data={dailyForecast} />
               </div>
           );  
       } else {
           return (null);
           }
           })}
          </div> 
           </div>
       );
       } else {

   let apiKey = "ebef9ca4a8de66ed586fac628fade056";
    let longitude = props.coordinates.longitude;
    let latitude = props.coordinates.latitude;
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${longitude}&lat=${latitude}&key=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);


return null;
       }

}

    
