

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
        var showcase_object = utils.newCircle(mousedata.x, mousedata.y, 1.5, {
            color : utils.newVibrantRandomColor(Math.random(), 10),
        })

        stage.addChild(showcase_object)
        lib_.physics.addBody(showcase_object, {})

        var rotation = Math.random() * 2 * Math.PI
        var intensity = Math.random() * 0.05
        showcase_object.physicsObject.xSpeed = intensity*Math.cos(rotation)
        showcase_object.physicsObject.ySpeed = intensity*Math.sin(rotation)

        lib_.timerManager.startTimer(2000 + 5000*Math.random(), function(showcase_object) {
            return function() {
                lib_.physics.removeBody(showcase_object)
                showcase_object.destroy()
            }
        }(showcase_object))
    }
}

// I though I needed those, now I'm just sad.
// stage.interactive = true;
// stage.on('mousedown', onclick);
