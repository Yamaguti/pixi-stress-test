

// Adding Stat Gizmo
lib_.debug.stats.setEnabled(true)


// Lib setup
lib_.setup()


// Activate Window Resize
lib_.windowUtils.setResize()


// begin showcase

var utils = lib_.utils
var physics = lib_.physics

physics.setGravity({
    x : 0.03,
    y : 0.01
})

// I CANNOT BELIVE SOMETHING IS LOOKING AT AN onclick GLOBAL VARIABLE :(
var onclick = function(mousedata) {
    for (var index = 0; index < 300; index++) {
        var rect = utils.newRectangle(mousedata.x, mousedata.y, 5, 5, {
            color : utils.newVibrantRandomColor(Math.random(), 10),
            strokeWidth : 1
        })
        stage.addChild(rect)
        lib_.physics.addBody(rect, {})

        var rotation = Math.random() * 2 * Math.PI
        var intensity = Math.random() * 0.05
        rect.physicsObject.xSpeed = intensity*Math.cos(rotation)
        rect.physicsObject.ySpeed = intensity*Math.sin(rotation)

        lib_.timerManager.startTimer(2000 + 5000*Math.random(), function(rect) {
            return function() {
                lib_.physics.removeBody(rect)
                rect.destroy()
            }
        }(rect))
    }
}

// I though I needed those, now I'm just sad.
// stage.interactive = true;
// stage.on('mousedown', onclick);
