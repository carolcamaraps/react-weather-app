import "./Weather.css";
import sunny from "./images/sunny.png";

export default function Weather() {
    return (
      <div className="Weather">
        <div className="row">
          <form>
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
          </form>
        </div>
        <h1>London</h1>
        <ul>
          <li>Wednesday 08:00</li>
          <li>Sunny</li>
        </ul>
        <div className="row mt-3">
          <div className="col-6">
            <div className="clearfix">
              
                <img className="weather-icon" src={sunny} alt="sun emoji" />
             
              
                <span className="temperature">15</span>
                <span className="unit">℃</span>
              
            </div>
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