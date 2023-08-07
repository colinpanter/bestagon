import "./Slider.css";

function Slider({onChange}) {
  return <div class="slidecontainer">
  <input type="range" min="0" max="100" defaultValue="50" class="slider" id="myRange" onChange={(e) => {onChange(e.target.value)}} />
</div>
}

export default Slider;