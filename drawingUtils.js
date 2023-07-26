let g_canvas;
let g_context;

// to increase performance createImageData method 
// should be executed once e.g. during initialization
let g_image;
let g_data;

export const dUtils = {};

dUtils.iWidth = 0;
dUtils.iHeight = 0;

dUtils.init = function() {
    g_canvas = document.querySelector('#my-canvas');
    g_context = g_canvas.getContext('2d');
    dUtils.iWidth = g_canvas.width;
    dUtils.iHeight = g_canvas.height;

    // to increase performance createImageData method 
    // should be executed once e.g. during initialization
    g_image = g_context.createImageData(g_canvas.width, g_canvas.height);
    g_data = g_image.data;
}


dUtils.drawPixel=function(x, y, color) {
      var roundedX = Math.round(x);
      var roundedY = Math.round(y);
      var index = 4 * (g_canvas.width * roundedY + roundedX);
      g_data[index + 0] = color.r;
      g_data[index + 1] = color.g;
      g_data[index + 2] = color.b;
      g_data[index + 3] = color.a;
}

dUtils.swapBuffer = function() {
    g_context.putImageData(g_image, 0, 0);
}