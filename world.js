// This class represents the world of ants
// Logically there will be only one object of this class (if we do not want to simulate a war between two worlds)
// Properties:
// height, width: numbers
// cells: an array of numbers [height,width] that represents the state of each cell of ground
// The value in each cell can be:
// 0=nothing
// 1=food
// 2=rock (ants cannot cross)

// Imports
import {dUtils} from "./drawingUtils.js"
import {Colony} from "./colony.js"


export class World {
    constructor(height, width) {
        
      this.height = height;
      this.width = width;

      this.cells = new Array(height);
      for(let i=0; i < height; i++) {
        this.cells[i] = new Array(width);
      }
      this.clear();

      this.colonies = new Array();
    }

    clear() { //
      // Initialize the array cells to 0 (all elements = 0)
      for(let i=0; i < this.height; i++) {
        this.cells[i] = new Array(this.width);
        for(let j=0; j < this.width; j++) {
          this.cells[i][j] = 0;
        }
      }
    }

    // This method returns the value of the cell in the position (x,y)
    // If the position is out of the world, it returns -1
    getCell(x,y) {
      if(x < 0 || x >= this.width || y < 0 || y >= this.height) {
        return -1;
      }
      return this.cells[y][x];
    }

    updateCell(x,y,value) {
      if(x < 0 || x >= this.width || y < 0 || y >= this.height) {
        return;
      }
      this.cells[y][x] = value;
    }

    addColony(x, y) {
      this.colonies.push(new Colony(x,y));
    }

    update() {
      for(let i=0; i < this.colonies.length; i++) {
        this.colonies[i].update();
      }
    }


  }