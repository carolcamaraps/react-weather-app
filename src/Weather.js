import "./Weather.css";
import React, {useState} from "react";
import FormattedDate from "./FormattedDate";
import axios from "axios";


export default function Weather(props) {
const [weatherData, setWeatherData] = useState({ready: false});
function handleResponse(response) {
setWeatherData({
  ready: true,
  city: response.data.city,
  date: new Date (response.data.time * 1000),
  temperature: response.data.temperature.current,
  description: response.data.condition.description,
  wind: (response.data.wind.speed * 18) / 5,
  humidity: response.data.temperature.humidity,
  iconUrl: response.data.condition.icon_url,
});
}

if (weatherData.ready) {
return (
  <div className="Weather">
    <div className="row">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              className="form-control"
              type="search"
              placeholder="Enter a city..."
              autoFocus="on"
            />
          </div>
          <div className="col-3">
            <input
              className="btn btn-primary w-100"
              type="submit"
              value="Search"
            />
          </div>
        </div>
      </form>
    </div>
    <h1>{weatherData.city}</h1>
    <ul>
      <li><FormattedDate date={weatherData.date} /></li>
      <li className="text-capitalize">{weatherData.description}</li>
    </ul>
    <div className="row mt-3">
      <div className="col-6">
        <div className="clearfix">
          <img className="weather-icon" src={weatherData.iconUrl} alt={weatherData.description} />

          <span className="temperature">{Math.round(weatherData.temperature)}</span>
          <span className="unit">℃</span>
        </div>
      </div>
      <div className="col-6">
        <ul>
          <li>Humidity: {weatherData.humidity}%</li>
          <li>Wind: {Math.round(weatherData.wind)} km/h</li>
        </ul>
      </div>
    </div>
  </div>
);
} else {

  const apiKey = "74207tf2dbea64540ea5c6f390o295e3";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);

  return "Loading...";

}

    
}