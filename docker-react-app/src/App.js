import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          22 Learn React - {process.env.NODE_ENV} -
          {process.env.CHOKIDAR_USEPOLLING ? "ㅋㅋ" : "ㅠㅠ"}
        </a>
      </header>
    </div>
  );
}

export default App;
