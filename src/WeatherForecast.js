
import WeatherForecastDay from "./WeatherForecastDay";
import "./WeatherForecast.css";
import axios from "axios";
import { useState, useEffect } from "react";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  useEffect(() => {
    setLoaded(false);
  }, [props.coordinates]);
  
  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  function load() {
    let apiKey = "74207tf2dbea64540ea5c6f390o295e3";
    let longitude = props.coordinates.longitude;
    let latitude = props.coordinates.latitude;
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${longitude}&lat=${latitude}&key=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);
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
  return null;
}
      }
      )}
    </div>
  </div>
);

  } else {

    load();

    return null;

  }
  
}
