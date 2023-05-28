import { useState } from 'react';
import Hexagon from './Hexagon';

import "./Grid.css";


function qrs_key(q, r, s) {
  return `${q},${r},${s}`
}


function Grid() {
  const settings = {
    placing: 'start'
  }

  const dims = {col:26, row:10};

  let init_states = new Array(dims.col * dims.col);
  init_states.fill('free')
  const [states, setStates] = useState(init_states)
  const grid = new Map();
  const hexs = [];

  let [start, setStart] = useState([0,0,0])
  let [end, setEnd] = useState([0,1,-1])

  for (let i=0; i<dims.col; i++) {
    for (let j=0; j<dims.row; j++) {
      let q = i;
      let r = j - (i >> 1);
      let s = -q - r;

      let num = hexs.length;
      let key = qrs_key(q, r, s)

      function handleClick() {
        if (settings.placing === 'start') {setStart([q,r,s])}
        else if (settings.placing === 'end') {setEnd([q,r,s])}
        else {setStates(states.map((s, i) => {return i===num ? (states[num] === 'wall' ? 'free' : 'wall') : s}))}
      }
      
      let hex = <Hexagon position={[q, r, s]} endpoints={{start:start, end:end}} state={states[num]} onClick={handleClick} />
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