import numpy as np
import matplotlib.pyplot as plt
from matplotlib.patches import RegularPolygon


class HexagonalGrid:
    def __init__(self, values):
        self.values = values
    
    def get_shape(self):
        return self.values.shape
    
    def get_neighbors(self, i, j):
        points = [(i-1, j+(i+1)%2), (i, j+1), (i+1, j+(i+1)%2), (i+1, j-i%2), (i, j-1), (i-1, j-i%2)]
        return [p if 0 <= p[0] < self.values.shape[0] and 0 <= p[1] < self.values.shape[1] else None for p in points]
    
    def __getitem__(self, i):
        return self.values[i]
    
    def __setitem__(self, i, x):
        self.values[i] = x

    def display(self, labels=False):
        shape = self.values.shape
        offset = 2 / np.sqrt(3)

        fig, ax = plt.subplots(1)
        ax.set_aspect('equal')
        
        for i in range(shape[0]):
            for j in range(shape[1]):
                val = self.values[i, j]
                if val == 0:
                    color = 1, 1, 1
                elif val == 1:
                    color = 0, 0, 1
                elif val == 2:
                    color = 0, 1, 0
                else:
                    color = 0, 0, 0
                x = i
                y = j * offset - i % 2 * offset / 2
                hex = RegularPolygon((x, y), numVertices=6, radius=2. / 3., 
                                    orientation=np.radians(30), 
                                    facecolor=color, alpha=1, edgecolor=color, lw=1)
                ax.add_patch(hex)
                if labels:
                    ax.text(x, y, f"({i}, {j})", ha='center', va='center', size=10)

        ax.set_xlim((-offset, shape[0] - 1 + offset))
        ax.set_ylim((-offset - 1/2, (shape[1] - 1/2) * offset + 1/2))
        ax.axis('off')

        plt.show()


if __name__ == "__main__":
    a = np.zeros((16, 12))
    grid = HexagonalGrid(a)

    point = (3, 5)
    grid[point] = 1
    for p in grid.get_neighbors(*point):
        if p is not None:
            grid[p] = 2
    
    grid[0,:] = -1
    grid[-1,:] = -1
    grid[:,0] = -1
    grid[:,-1] = -1

    grid.display()
