
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

// 6

export class World {
    constructor(width, height) {
        
      this.height = height;
      this.width = width;

      this.cells = new Array(height);
      for(let i=0; i < height; i++) {
        this.cells[i] = new Array(width);
      }
      this.clear();

      this.colonies = new Array();
    }

      // Initialize the array cells to 0 (all elements = 0)
      // this function is to reset the world
      clear() { 
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

    // draws a square of size 'size' centered in (x,y)
    // it is a bit complicated because it draws the square centered, and it controls that 
    // it does not go out of the world using functions Math.max and Math.min (we will see this later)
    addRock(x, y, size) {
      let s2 = size/2;  
      for(let i=Math.max(0,y-s2); i < Math.min(this.height,y+s2); i++) {
        for(let j=Math.max(0,x-s2); j < Math.min(this.width,x+s2); j++) {
          this.cells[i][j] = 2;
        }
      }
    }

    // draws a square of size 'size' centered in (x,y)
    // it is a bit complicated because it draws the square centered, and it controls that 
    // it does not go out of the world using functions Math.max and Math.min (we will see this later)
    addFood(x, y, size) {
      let s2 = size/2;
      for(let i=Math.max(0,y-s2); i < Math.min(this.height,y+s2); i++) {
        for(let j=Math.max(0,x-s2); j < Math.min(this.width,x+s2); j++) {
          this.cells[i][j] = 1;
        }
      }
    }

    // This function adds a colony to the world
    addColony(x, y) {
      let colony = new Colony(x,y);
      // the function push adds an element to the end of the array
      this.colonies.push(colony);
    }

    // This function updates the world calling the function update of each colony
    // the idea is that each colony will update itself and call the function update of each ant
    update() {
      for(let i=0; i < this.colonies.length; i++) {
        this.colonies[i].update();
      }
    }

    // This function draws the world
    // first it traverses the array cells and draws the ground drawing white, black or green
    // depending if there is nothing (0), a rock (2) or food (1)
    // after that it draws the colonies calling the method draw of each colony 
    draw() {
      // Here we draw the ground
      for(let i=0; i < this.height; i++) {
        for(let j=0; j < this.width; j++) {
          if (this.cells[i][j] == 0) {
            dUtils.drawPixel(j,i, {r: 255, g: 255, b: 255, a: 255});  // White (nothing)
          }
          if (this.cells[i][j] == 1) {
            dUtils.drawPixel(j,i, {r: 0, g: 255, b: 0, a: 255});  // Green (food)
          }
          if (this.cells[i][j] == 2) {
            dUtils.drawPixel(j,i, {r: 0, g: 0, b: 0, a: 255});  // Black (rock)
          }
        }
      }

      // Here we draw the colonies
      for(let i=0; i < this.colonies.length; i++) {
        this.colonies[i].draw();
      }
    }


  }

  