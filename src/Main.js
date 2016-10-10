

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


// Spawn physics based particles
var createParticles = function(amount, x, y) {
    for (var index = 0; index < amount; index++) {
        var showcase_object = utils.newCircle(x, y, 1.5, {
            color : utils.newVibrantRandomColor(Math.random(), 10),
        })

        stage.addChild(showcase_object)
        lib_.physics.addBody(showcase_object, {})

        var rotation  = Math.random() * 2 * Math.PI
        var intensity = Math.random() * 0.03
        showcase_object.physicsObject.xSpeed = intensity*Math.cos(rotation)
        showcase_object.physicsObject.ySpeed = intensity*Math.sin(rotation)

        // lib_.timerManager.startTimer(2000 + 5000*Math.random(), function(showcase_object) {
        //     return function() {
        //         lib_.physics.removeBody(showcase_object)
        //         showcase_object.destroy()
        //     }
        // }(showcase_object))
    }
}


// Creates a gravity source
var createGravityPoint = function(x, y) {
    var gravityPoint = utils.newCircle(x, y, 3, {
        color : 0xffffff,
        strokeWidth : 0.25,
    })

    stage.addChild(gravityPoint)

    lib_.physics.addBodyAsGravitySource(gravityPoint, {
        // isAffectedByGravityField : false,
        mass : 140000000000,
        fixedGravityScale : 0,
    })
}


// Mode
var gameMode = 1


// Touch
stage.hitArea     = new PIXI.Rectangle(screenLeft, screenTop, screenRight, screenBottom);
stage.interactive = true

stage.click = stage.tap = function(mousedata) {
    var position = mousedata.data.getLocalPosition(this)

    if (gameMode === 0) {
        createParticles(100, position.x, position.y)
        gameMode = 1

    } else {
        createGravityPoint(position.x, position.y)
        gameMode = 0
    }
}

console.log("tap the screen!")
