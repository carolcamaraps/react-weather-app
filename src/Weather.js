import "./Weather.css";
import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
import axios from "axios";


export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      city: response.data.city,
      date: new Date(response.data.time * 1000),
      temperature: response.data.temperature.current,
      description: response.data.condition.description,
      wind: (response.data.wind.speed * 18) / 5,
      humidity: response.data.temperature.humidity,
      icon: response.data.condition.icon,
    });
  }

  function search() {
    const apiKey = "74207tf2dbea64540ea5c6f390o295e3";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search()
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className="row">
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-9">
                <input
                  className="form-control"
                  type="search"
                  placeholder="Enter a city..."
                  autoFocus="on"
                  onChange={handleCityChange}
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
          <WeatherInfo data={weatherData} />
          <WeatherForecast />
        </div>

      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
