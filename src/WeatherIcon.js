import React from "react";
import ReactAnimatedWeather from "react-animated-weather";

export default function WeatherIcon(props) {
    const codeMapping = {
        "01d": "CLEAR_DAY",
        "01n": "CLEAR_NIGHT"
    };
        
    return (
    <ReactAnimatedWeather
    icon={codeMapping[props.code]}
    color="1e1e1e"
    size={64}
    animate={true}
     />
    );
}
  
    