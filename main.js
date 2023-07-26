// Imports
import {dUtils} from "./drawingUtils.js"

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

let x = 100;
let y = 100;

for(let i=0; i < 100; i++) {
      dUtils.drawPixel(x+i, y+i, colors[0]);
}

dUtils.swapBuffer();

