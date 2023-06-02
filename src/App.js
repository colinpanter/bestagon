import './App.css';

import Settings from './settings/Settings';
import Grid from './grid/Grid';

function App() {
  const settings = {
    tile: 'wall',
    startPathfinding: () => {console.log("clicked")}
  }
  return (
    <div className="App">
      <Settings settings={settings} />
      <Grid settings={settings} />
    </div>
  );
}

export default App;
