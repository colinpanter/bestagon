import "./Settings.css";

import TileTypeRadioBtn from "./TileTypeRadioBtn";



function Settings({settings}) {
  return <div className="settings">
    <TileTypeRadioBtn settings={settings} />
  </div>
}


export default Settings;