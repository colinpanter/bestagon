from collections import deque


def depth_first_search(grid, start, end):
    stack = deque()
    stack.append(start)
    parents = {start: None}

    while len(stack) > 0:
        node = stack.pop()
        grid[node] = 2
        if node == end:
            break
        for neighbor in grid.get_neighbors(node[0], node[1]):
            if neighbor is not None and grid[neighbor] == 0:
                stack.append(neighbor)
                parents[neighbor] = node
                grid[neighbor] = 1
    path = []
    node = end
    while node != start:
        path.append(node)
        node = parents[node]
    path.append(start)

    return path[::-1]