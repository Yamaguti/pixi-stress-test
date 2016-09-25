
lib_.utils = {}


// Thanks to http://stackoverflow.com/questions/5767325/how-to-remove-a-particular-element-from-an-array-in-javascript
lib_.utils.removeFromArray = function(array, element) {
    var index = array.indexOf(element);
    if (index >= 0)
        array.splice(index, 1);
}


// Thanks to http://stackoverflow.com/questions/22073350/draw-a-rectangle-with-pixi-js
lib_.utils.newRectangle = function(x, y, width, height, params) {
    params = params || {}

    var graphics = new PIXI.Graphics();

    if (params.color != undefined) {
        graphics.beginFill(params.color);
    }

    // set the line style to have a width of 5 and set the color to red
    graphics.lineStyle(params.strokeWidth || 2, params.strokeColor || 0x000000);

    // draw a rectangle
    graphics.drawRect(x, y, width, height);

    return graphics;
}
