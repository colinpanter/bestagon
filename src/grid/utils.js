function qrs_key(q, r, s) {return `${q},${r},${s}`}

function key_to_num(key, grid) {
    const key_str = qrs_key(key[0], key[1], key[2])
    return grid.get(key_str)
}

function get_neighbors(pos, grid) {
    const neighbors = [[1, -1, 0], [1, 0, -1], [-1, 1, 0], [-1, 0, 1], [0, 1, -1], [0, -1, 1]]
    const mapped = neighbors.map(d => [pos[0]+d[0], pos[1]+d[1], pos[2]+d[2]])
    const filtered = mapped.filter(n => grid.has(qrs_key(...n)))
    return filtered
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

export {qrs_key, key_to_num, get_neighbors, sleep}
