// Imports
import {dUtils} from "./drawingUtils.js"

import {Ant} from "./ant.js"
import {Colony} from "./colony.js"
import {World} from "./world.js"
     

// Data
const colors = [
      {r: 255, g:   0, b:   0, a: 255}, // red
      {r:   0, g: 255, b:   0, a: 255}, // green
      {r:   0, g:   0, b: 255, a: 255}, // blue
];

let red = {r: 255, g:   0, b:   0, a: 255}; // red
let green = {r:   0, g: 255, b:   0, a: 255}; // green
let blue = {r:   0, g: 255, b:   0, a: 255}; // green

let width = 800;
let height = 600;

// Main
dUtils.init(width, height);

let world = new World(width, height);

world.addRock(300, 100, 100);
world.addRock(350, 300, 100);

world.addFood(750, 350, 20);

world.draw();

dUtils.swapBuffer();

