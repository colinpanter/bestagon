import RadioButton from "../components/RadioButton";

function TileTypeRadioBtn({settings}) {
  
  function onChangeValue(event) {
    settings.tile = event.target.value
    // setSettings({...settings, tile: event.target.value})
  }

  return <RadioButton
    choices={['wall', "start", "end"]}
    initChoice={"wall"}
    name="TileType"
    onChange={onChangeValue}
  />
}

export default TileTypeRadioBtn;