import numpy as np
from classHexagonalGrid import HexagonalGrid
from algorithms.breadth_first_search import breadth_first_search
from algorithms.depth_first_search import depth_first_search


def main():
    grid = HexagonalGrid(np.zeros((16, 12)))
    grid.generate_labyrinth()
    print(depth_first_search(grid, (1,1), (10,1)))
    grid.display()


if __name__ == "__main__":
    main()
