
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

    if (params.strokeWidth)
        graphics.lineStyle(params.strokeWidth || 2, params.strokeColor || 0x000000);

    // draw a rectangle
    graphics.drawRect(0, 0, width, height);
    graphics.position.x = x
    graphics.position.y = y

    return graphics;
}


lib_.utils.newCircle = function(x, y, radius, params) {
    params = params || {}

    var graphics = new PIXI.Graphics();

    if (params.color != undefined) {
        graphics.beginFill(params.color);
    }

    if (params.strokeWidth)
        graphics.lineStyle(params.strokeWidth, params.strokeColor || 0x000000);

    // draw a rectangle
    graphics.drawCircle(0, 0, radius);

    graphics.position.x = x
    graphics.position.y = y

    return graphics;
}


// Credits:
// http://stackoverflow.com/questions/1484506/random-color-generator-in-javascript
// I honestly have little idea what the parameters are.
lib_.utils.newVibrantRandomColor = function(numOfSteps, step) {
    // This function generates vibrant, "evenly spaced" colours (i.e. no clustering). This is ideal for creating easily distinguishable vibrant markers in Google Maps and other apps.
    // Adam Cole, 2011-Sept-14
    // HSV to RBG adapted from: http://mjijackson.com/2008/02/rgb-to-hsl-and-rgb-to-hsv-color-model-conversion-algorithms-in-javascript
    var r, g, b;
    var h = step / numOfSteps;
    var i = ~~(h * 6);
    var f = h * 6 - i;
    var q = 1 - f;
    switch(i % 6){
        case 0: r = 1; g = f; b = 0; break;
        case 1: r = q; g = 1; b = 0; break;
        case 2: r = 0; g = 1; b = f; break;
        case 3: r = 0; g = q; b = 1; break;
        case 4: r = f; g = 0; b = 1; break;
        case 5: r = 1; g = 0; b = q; break;
    }
    var c = "0x" + ("00" + (~ ~(r * 255)).toString(16)).slice(-2) + ("00" + (~ ~(g * 255)).toString(16)).slice(-2) + ("00" + (~ ~(b * 255)).toString(16)).slice(-2);
    return (c);
}
