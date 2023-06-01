// import { useState } from 'react';
import "./Hexagon.css";


function equal(p1, p2) {return p1[0]===p2[0] && p1[1]===p2[1] && p1[2]===p2[2]}


function Hexagon({ position, endpoints, state, onClick }) {
  
  const x = 100 * (Math.sqrt(3)/2 * position[0])
  const y = 100 * (position[1]  +  position[0]/2)

  const style = {
    left: `${x}px`,
    top: `${y}px`,
    translate: "-50% -50%",
    position: "absolute"
  };
  
  if (equal(endpoints.start, position)) {state = 'start'}
  if (equal(endpoints.end, position)) {state = 'end'}

  return (
    // <div className={`hex ${state}`} style={style} onClick={onClick}></div>
    <svg height="100" width="116" style={style}>
      <polygon points="116,50 87,100 29,100 0,50 29,0 87,0" className={`hex ${state}`} onClick={onClick}></polygon>
    </svg>
  );
}


export default Hexagon;