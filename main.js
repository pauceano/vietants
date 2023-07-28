// Imports
import {dUtils} from "./drawingUtils.js"

import Ant from "./ant.js"
import Colony from "./colony.js"
import World from "./world.js"
     

// Data
const colors = [
      {r: 255, g:   0, b:   0, a: 255}, // red
      {r:   0, g: 255, b:   0, a: 255}, // green
      {r:   0, g:   0, b: 255, a: 255}, // blue
];

let red = {r: 255, g:   0, b:   0, a: 255}; // red
let green = {r:   0, g: 255, b:   0, a: 255}; // green
let blue = {r:   0, g: 255, b:   0, a: 255}; // green



// Main
dUtils.init();

// Here we will do the program

dUtils.swapBuffer();

