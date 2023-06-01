import "./Settings.css";

import TileTypeRadioBtn from "./TileTypeRadioBtn";



function Settings({settings, setSettings}) {
  return <div className="settings">
    <TileTypeRadioBtn settings={settings} setSettings={setSettings} />
  </div>
}


export default Settings;