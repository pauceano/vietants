// This class represents the world of ants
// Logically there will be only one object of this class (if we do not want to simulate a war between two worlds)
// Properties:
// height, width: numbers
// cells: an array of numbers [height,width] that represents the state of each cell of ground
// The value in each cell can be:
// 0=nothing
// 1=food
// 2=rock (ants cannot cross)
export class World {
    constructor(height, width) {
        
      this.height = height;
      this.width = width;


    }
  }