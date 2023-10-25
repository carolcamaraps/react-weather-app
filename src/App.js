
import './App.css';
import Weather from './Weather';

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <footer>
          Project coded by Carolina Câmara as part of the SheCodes React
          Workshop and is{" "}
          <a
            href="https://github.com/carolcamaraps/react-weather-app"
            target="_blank"
          >
            open-sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
};


