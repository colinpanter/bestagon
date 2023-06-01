import { useState } from 'react';

import './App.css';

import Settings from './settings/Settings';
import Grid from './grid/Grid';

function App() {
  const [settings, setSettings] =  useState({tile: 'end'})
  return (
    <div className="App">
      <Settings settings={settings} setSettings={setSettings} />
      <Grid settings={settings} />
    </div>
  );
}

export default App;
