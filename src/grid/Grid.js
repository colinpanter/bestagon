import { useState } from 'react';
import Hexagon from './Hexagon';

import "./Grid.css";


function qrs_key(q, r, s) {
  return `${q},${r},${s}`
}


function Grid({settings}) {
  const dims = {col:23, row:9};

  let init_states = new Array(dims.col * dims.col);
  init_states.fill('free')
  const [states, setStates] = useState(init_states)
  const grid = new Map();
  const hexs = [];

  let [endpoints, setEnpoints] = useState({start:[0,0,0], end:[0,1,-1]})

  for (let i=0; i<dims.col; i++) {
    for (let j=0; j<dims.row; j++) {
      let q = i;
      let r = j - (i >> 1);
      let s = -q - r;

      let num = hexs.length;
      let key = qrs_key(q, r, s)

      function handleClick() {
        if (settings.tile === 'start') {setEnpoints({...endpoints, start:[q,r,s]})}
        else if (settings.tile === 'end') {setEnpoints({...endpoints, end:[q,r,s]})}
        else {setStates(states.map((s, i) => {return i===num ? (states[num] === 'wall' ? 'free' : 'wall') : s}))}
      }
      
      let hex = <Hexagon position={[q, r, s]} endpoints={endpoints} state={states[num]} onClick={handleClick} />
      hexs.push(hex);

      grid.set(key, num)
    }
  }

  return (
    <div className='grid'>
        {hexs}
    </div>
  );
}

export default Grid;