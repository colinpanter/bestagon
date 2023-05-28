// import logo from './logo.svg';
import './App.css';
// import Hexagon from './grid/Hexagon';
import Settings from './grid/Settings';
import Grid from './grid/Grid';

function App() {
  return (
    <div className="App">
      {/* <header className="App-body">
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
          Learn React
        </a>
      </header> */}
      <Settings />
      <Grid />
    </div>
  );
}

export default App;
