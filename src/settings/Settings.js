import "./Settings.css";

import TileTypeRadioBtn from "./TileTypeRadioBtn";
import StartPathfindingBtn from "./StartPathfindingBtn";



function Settings({settings}) {
  return <div className="settings">
    <TileTypeRadioBtn settings={settings} />
    <StartPathfindingBtn settings={settings} />
  </div>
}


export default Settings;