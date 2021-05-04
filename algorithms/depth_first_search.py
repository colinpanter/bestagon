from collections import deque


def depth_first_search(grid, start, end):
    stack = deque()
    stack.append(start)
    parents = {start: None}

    while len(stack) > 0:
        node = stack.pop()
        if node == end:
            break
        for neighbor in grid.get_neighbors(node):
            if neighbor not in parents:
                stack.append(neighbor)
                parents[neighbor] = node
    
    path = []
    node = end
    while node != start:
        path.append(node)
        node = parents[node]
    path.append(start)

    return path[::-1]