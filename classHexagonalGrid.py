import numpy as np
import matplotlib.pyplot as plt
from matplotlib.patches import RegularPolygon


class HexagonalGrid:
    def __init__(self, values):
        self.values = values

    def display(self):
        shape = self.values.shape
        offset = 2 / np.sqrt(3)

        fig, ax = plt.subplots(1)
        ax.set_aspect('equal')
        
        for i in range(shape[0]):
            for j in range(shape[1]):
                color = (self.values[i, j], 1-self.values[i, j], 0)
                x = i
                y = j * offset + i % 2 * offset / 2
                hex = RegularPolygon((x, y), numVertices=6, radius=2. / 3., 
                                    orientation=np.radians(30), 
                                    facecolor=color, alpha=1, edgecolor='k', lw=3)
                ax.add_patch(hex)

        ax.set_xlim((-offset, shape[0] - 1 + offset))
        ax.set_ylim((-offset / 2 - 1/2, shape[1] * offset + 1/2))
        ax.axis('off')

        plt.show()


if __name__ == "__main__":
    x, y = np.meshgrid(range(6), range(8))
    a = x + y
    a = a / np.amax(a)
    grid = HexagonalGrid(a)
    grid.display()
