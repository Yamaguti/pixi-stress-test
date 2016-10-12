
// Buttons
var newButton = function(width, height, buttonParams) {
    var button = lib_.utils.newRectangle(0, 0, width, height, {
        color : buttonParams.color,
        strokeWidth : 2,
        strokeColor: 0xffffff
    })

    button.interactive = true
    button.pivot.x = width  * 0.5; button.pivot.y = height * 0.5

    button.normalScale  = function(){ this.alpha = 1 }
    button.pressedScale = function(){ this.alpha = 0.6 }

    button.mousedown = button.touchstart = function(mouseData) {
        mouseData.stopPropagation()
        button.pressedScale()
    }

    button.mouseup = button.touchend = function(mouseData) {
        mouseData.stopPropagation()
        button.normalScale()
        if (buttonParams.onRelease) {
            buttonParams.onRelease()
        }
    }

    button.mouseout = function() { button.normalScale() }
    return button
}
