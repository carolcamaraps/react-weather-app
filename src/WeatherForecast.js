import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
    function handleResponse(response) {
        console.log(response.data);
    }
    
    let apiKey = "74207tf2dbea64540ea5c6f390o295e3";
    let longitude = props.coordinates.longitude;
    let latitude = props.coordinates.latitude;
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${longitude}&lat=${latitude}&key=${apiKey}&units=metric`;
    
    axios.get(apiUrl).then(handleResponse);
    
    return (
      <div className="WeatherForecast">
        <div className="row">
          <div className="col">
            <div className="WeatherForecast-day">Thu</div>
            <WeatherIcon code="mist-day" size={36} />
            <div className="WeatherForecast-temperatures">
              <span className="WeatherForecast-temperature-max">19º</span>
              <span className="WeatherForecast-temperature-min">10º</span>
            </div>
          </div>
        </div>
      </div>
    );
}