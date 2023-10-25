import "./Weather.css";
import sunny from "./images/sunny.png";

export default function Weather() {
    return (
      <div className="Weather">
        <div className="row">
          <form>
            <div className="col-8">
              <input
                className="form-control"
                type="search"
                placeholder="Enter a city..."
              />
            </div>
            <div className="col-4">
              <input className="btn btn-primary" type="submit" value="Search" />
            </div>
          </form>
        </div>
        <h1>London</h1>
        <ul>
          <li>Wednesday 08:00</li>
          <li>Sunny</li>
        </ul>
        <div className="row">
          <div className="col-6">
            <img className="weather-icon" src={sunny} alt="sun emoji" /> 15 ℃
          </div>
          <div className="col-6">
            <ul>
              <li>Humidity: 25%</li>
              <li>Wind: 7 km/h</li>
            </ul>
          </div>
        </div>
      </div>
    );
}