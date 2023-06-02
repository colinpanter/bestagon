// eslint-disable-next-line
import { key_to_num, get_neighbors, sleep } from "../utils";

async function dijkstra(states, setStates, endpoints, grid) {
    const dist = []
    const prev = []
    states.forEach((state, i) => {
        dist[i] = Number.POSITIVE_INFINITY
        prev[i] = null
        states[i] = (state === 'wall') ? 'wall' : 'free'
    })

    const to_visit = [endpoints.start]
    let num = key_to_num(endpoints.start, grid)
    states[num] = "queued"
    dist[num] = 0
    setStates(states)

    const end_num = key_to_num(endpoints.end, grid)
    let found_exit = false
    while (to_visit.length > 0 && !found_exit) {
        let closest_node_num = null
        let dist_closest_node = Number.POSITIVE_INFINITY
        to_visit.forEach((qrs, i) => {
            let num = key_to_num(qrs, grid)
            if (dist[num] < dist_closest_node) {
                dist_closest_node = dist[num]
                closest_node_num = i
            }
        });

        let closest_node = to_visit.splice(closest_node_num, 1)[0]
        let num = key_to_num(closest_node, grid)

        if (num === end_num) {found_exit = true}
        
        states[num] = "visited"
        let neighbors = get_neighbors(closest_node, grid)
        
        neighbors = neighbors.filter(neighbor => states[key_to_num(neighbor, grid)] !== 'wall')
        neighbors.forEach(neighbor => {
            const num_neigbor = key_to_num(neighbor, grid)
            if (states[num_neigbor] === 'free') {
                states[num_neigbor] = 'queued'
                to_visit.push(neighbor)
            }
            if (dist[num] + 1 < dist[num_neigbor]) {
                dist[num_neigbor] = dist[num] + 1
                prev[num_neigbor] = num
            }
        });
        // await sleep(500)
        setStates(states)
    }
    let next = key_to_num(endpoints.end, grid)
    while (next !== null) {
        states[next] = "path"
        next = prev[next]
    }
    setStates(states)
}

export default dijkstra;