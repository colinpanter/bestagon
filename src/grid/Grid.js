import { useState, useEffect } from 'react';
import Hexagon from './Hexagon';
import { qrs_key } from './utils';
import dijkstra from './pathfinders/dijkstra';

import "./Grid.css";


function Grid({settings}) {
  console.log(settings)
  const [size, setSize] = useState({width: window.innerWidth, height: window.innerHeight-100});
  useEffect(() => {
    window.addEventListener("resize", () => setSize({width: window.innerWidth, height: window.innerHeight-100}));
  }, []);
  const scale = settings.scale.value
  const dims = {col:Math.ceil(((4/3) * size.width/116 + 0.5)/scale), row:Math.ceil((size.height/100)/scale)};

  let init_states = new Array(dims.col * dims.col);
  init_states.fill('free')
  const [states, setStates] = useState(init_states)
  const grid = new Map();
  const hexs = [];

  let [endpoints, setEnpoints] = useState({start:[2,3,-5], end:[20,-6,-14]})

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
        else {
          const states_copy = [...states]
          states_copy[num] = (states[num] === 'wall' ? 'free' : 'wall')
          setStates(states_copy)
        }
      }
      
      let hex = <Hexagon position={[q, r, s]} endpoints={endpoints} state={states[num]} onClick={handleClick} scale={scale} />
      hexs.push(hex);

      grid.set(key, num)


      // sleep(2000).then(() => {dijkstra([...states], setStates, {start:[2,3,-5], end:[20,-6,-14]}, grid)});
      
    }
  }
  settings.startPathfinding = () => {dijkstra([...states], setStates, endpoints, grid)}
  // setSettings({...settings, startPathfinding: () => {dijkstra([...states], setStates, endpoints, grid)}})

  return (
    <div className='grid'>
        {hexs}
    </div>
  );
}

export default Grid;