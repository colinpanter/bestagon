from collections import deque


def breadth_first_search(grid, start, end):
    queue = deque()
    queue.appendleft(start)
    parents = {start: None}

    while len(queue) > 0:
        node = queue.pop()
        if node == end:
            break
        for neighbor in grid.get_neighbors(node):
            if neighbor not in parents:
                queue.appendleft(neighbor)
                parents[neighbor] = node
    
    path = []
    node = end
    while node != start:
        path.append(node)
        node = parents[node]
    path.append(start)

    return path[::-1]