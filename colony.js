
// Imports
import {dUtils} from "./drawingUtils.js"
import {Ant} from "./ant.js"


export class Colony {
    constructor(x, y, nAnts, color) {
        this.x = x;
        this.y = y;
        this.color = color;

        this.ants = new Array(nAnts);
        for(let i=0; i < nAnts; i++) {
        this.ants[i] = new Ant(this.x, this.y);
        }
    }

    update() {  
        for(let i=0; i < this.ants.length; i++) {
            this.ants[i].update();
        }
    }
    draw() {  
        for(let i=0; i < this.ants.length; i++) {
            this.ants[i].draw();
        }
    }
};