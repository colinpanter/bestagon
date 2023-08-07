import "./RadioButton.css";

function RadioButton({choices, initChoice=null, name, onChange}) {

  return <div class="radioBtn" onChange={onChange}>
      {choices.map((item) => {return <div><input type="radio" value={item} name={name} defaultChecked={item===initChoice} /> {item} </div>})}
    </div>
}

export default RadioButton;