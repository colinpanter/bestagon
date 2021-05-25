from collections import deque


def breadth_first_search(grid, start, end):
    queue = deque()
    queue.appendleft(start)
    parents = {start: None}

    while len(queue) > 0:
        node = queue.pop()
        grid[node] = 2
        if node == end:
            break
        for neighbor in grid.get_neighbors(node):
            if grid[neighbor] == 0:
                queue.appendleft(neighbor)
                parents[neighbor] = node
                grid[neighbor] = 1
    
    path = []
    node = end
    while node != start:
        path.append(node)
        node = parents[node]
    path.append(start)

    return path[::-1]