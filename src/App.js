
import './App.css';
import Weather from './Weather';

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Tokyo" />
        <footer>
          Project coded by Carolina Câmara as part of{" "}
          <a
            href="https://www.shecodes.io/workshops"
            target="_blank"
            rel="noreferrer"
          >
            SheCodes React Workshop
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/carolcamaraps/react-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
};


