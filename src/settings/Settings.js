import "./Settings.css";

import TileTypeRadioBtn from "./TileTypeRadioBtn";
import StartPathfindingBtn from "./StartPathfindingBtn";
import ScaleSlider from "./ScaleSlider";



function Settings({settings}) {
  return <div className="settings">
    <StartPathfindingBtn settings={settings} />
    <TileTypeRadioBtn settings={settings} />
    <ScaleSlider settings={settings} />
  </div>
}


export default Settings;