let g_canvas;
let g_context;

// to increase performance createImageData method 
// should be executed once e.g. during initialization
let g_image;
let g_data;
let g_color = [0,0,0,255];

let g_factorX = 1;
let g_factorY = 1;

export const dUtils = {};

dUtils.init = function(width,height) {
    dUtils.iWidth = width;
    dUtils.iHeight = height;
    g_canvas = document.querySelector('#my-canvas');
    g_context = g_canvas.getContext('2d');

    function resizeCanvas() {
        g_factorX = g_canvas.width  / dUtils.iWidth;
        g_factorY = g_canvas.height / dUtils.iHeight;

        // to increase performance createImageData method 
        // should be executed once e.g. during initialization
        g_image = g_context.createImageData(g_canvas.width, g_canvas.height);
        g_data = g_image.data;
    }
    addEventListener("resize", (event) => {resizeCanvas();});
    resizeCanvas();
}


dUtils.drawPixel=function(x, y, color) {
    if (color != undefined) {
        g_color = color;
    //    g_context.fillStyle = toHexString(color);
     }
     x*=g_factorX; 
     y*=g_factorY;

     // g_context.fillRect(x, y, 1, 1);
     
     var roundedX = Math.round(x);
     var roundedY = Math.round(y);
     var index = 4 * (g_canvas.width * roundedY + roundedX);
     g_data[index + 0] = g_color.r;
     g_data[index + 1] = g_color.g;
     g_data[index + 2] = g_color.b;
     g_data[index + 3] = g_color.a;
}

dUtils.swapBuffer = function() {
    g_context.putImageData(g_image, 0, 0);
}