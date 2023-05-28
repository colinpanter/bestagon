// import { useState } from 'react';
import "./Hexagon.css";


function equal(p1, p2) {return p1[0]===p2[0] && p1[1]===p2[1] && p1[2]===p2[2]}


function Hexagon({ position, endpoints, state, onClick }) {
  
  const x = 50 * (3./2 * position[0])
  const y = 50 * (Math.sqrt(3) * position[1]  +  Math.sqrt(3)/2 * position[0])

  const style = {
    left: `${x}px`,
    top: `${y}px`
  };
  
  if (equal(endpoints.start, position)) {state = 'start'}
  if (equal(endpoints.end, position)) {state = 'end'}

  return (
    <div className={`hex ${state}`} style={style} onClick={onClick}></div>
  );
}


export default Hexagon;