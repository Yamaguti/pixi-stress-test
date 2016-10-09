

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


stage.hitArea     = new PIXI.Rectangle(screenLeft, screenTop, screenRight, screenBottom);
stage.interactive = true

stage.click = stage.tap = function(mousedata) {
    var position = mousedata.data.getLocalPosition(this)
    var x = position.x
    var y = position.y

    for (var index = 0; index < 300; index++) {

        var showcase_object = utils.newCircle(x, y, 1.5, {
            color : utils.newVibrantRandomColor(Math.random(), 10),
        })

        stage.addChild(showcase_object)
        lib_.physics.addBody(showcase_object, {})

        var rotation = Math.random() * 2 * Math.PI
        var intensity = Math.random() * 0.03
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

console.log("tap the screen!")
