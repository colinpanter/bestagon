import Slider from "../components/Slider";

function ScaleSlider({settings}) {
  return <Slider onChange={(v) => {settings.scale.setValue(v/100+0.5)}} />
}

export default ScaleSlider;