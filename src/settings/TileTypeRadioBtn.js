function TileTypeRadioBtn({settings}) {
  
  function onChangeValue(event) {
    settings.tile = event.target.value
  }

  return <div onChange={onChangeValue}>
      <input type="radio" value="wall" name="gender" defaultChecked="checked" /> Wall
      <input type="radio" value="start" name="gender" /> Start
      <input type="radio" value="end" name="gender" /> End
    </div>
}

export default TileTypeRadioBtn;