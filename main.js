// Imports
// to import a class from a module, we use the import keyword
// import simply means to bring the definition we have made in another file to this file

// Here we import dUtils, where we have some drawing functions
// in the file drawingUtils.js, we have defined an dUtils that has the drawing function
// remember that a function is a value, so we include it in an object
import {dUtils} from "./drawingUtils.js"

// Here we import the classes we need
// Ant is the class that represents an ant, we still do not use it
import {Ant} from "./ant.js"

// Colony is the class that represents a colony of ants, we still do not use it
import {Colony} from "./colony.js"

// World is the class that represents the world.
// there will be ony one object of this class, and it will contain the colonies
// also, it will contain functions to add the rocks and the food
// it will contain a matrix (array of arrays) of numeric values representing the ground
// this arrays cells will be 0 for empty, 1 for food, 2 for rock, 
// and, finally, it will contain the function to draw the world, that draws the array cells
import {World} from "./world.js"
     

// Here we declare necessary data

// we declare the colors that we will use letter
let red = {r: 255, g:   0, b:   0, a: 255}; // red
let green = {r:   0, g: 255, b:   0, a: 255}; // green
let blue = {r:   0, g: 255, b:   0, a: 255}; // green

// we declare the width and height of the world we want to create
let width = 800;
let height = 600;

// Main
// this is just to initialize the drawing functions with the width and height of the world
// we do not care about this now, we just call it
dUtils.init(width, height);

// we create a new world useing new and passing the width and height to the constructor
// check world.js to see the constructor
// we store the world in a variable called world
let world = new World(width, height);

// we add 2 rocks to the world
// check world.js to see the addRock function
// I have made it a bit complicated to make the square centered in the position, but it
// only 'draws' a square in the array cells
world.addRock(300, 100, 100);
world.addRock(350, 300, 100);

// We add a square of food
// same as before, but with food
world.addFood(750, 350, 20);

// We call the function draw() of the object world
world.draw();

dUtils.swapBuffer();

