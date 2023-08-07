import { useState } from 'react';
import './App.css';

import Settings from './settings/Settings';
import Grid from './grid/Grid';

function App() {
  console.log("yeet")
  // const [settings, setSettings] = useState({
  //   tile: 'wall',
  //   startPathfinding: () => {console.log("clicked")},
  //   scale: 1.
  // })

  const [scale, setScale] = useState(1.)
  const settings = {
    tile: 'wall',
    startPathfinding: () => {console.log("clicked")},
    scale: {value: scale, setValue: setScale}
  }
  // const setSettings = (v) => console.log(v)
  return (
    <div className="App">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
      <Settings settings={settings} />
      <Grid settings={settings} />
    </div>
  );
}

export default App;
