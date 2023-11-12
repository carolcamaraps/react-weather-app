
import WeatherForecastDay from "./WeatherForecastDay";
import "./WeatherForecast.css";
import axios from "axios";
import { useState } from "react";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);
  
  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }


  if (loaded) {

return (
  <div className="WeatherForecast">
    <div className="row">
      <div className="col">
        <WeatherForecastDay data={forecast[0]} />
      </div>
    </div>
  </div>
);

  } else {

    let apiKey = "74207tf2dbea64540ea5c6f390o295e3";
    let longitude = props.coordinates.longitude;
    let latitude = props.coordinates.latitude;
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${longitude}&lat=${latitude}&key=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);

    return null;

  }
  
}
