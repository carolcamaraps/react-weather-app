
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
          |{" "}
          <a
            href="https://github.com/carolcamaraps/react-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced on GitHub
          </a>{" "}
          |{" "}
          <a
            href="https://illustrious-paletas-d16319.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            hosted on Netlify
          </a>
        </footer>
      </div>
    </div>
  );
};


