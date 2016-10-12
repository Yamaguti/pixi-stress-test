

// physics.setGravity({
//     x : 0.03,
//     y : 0.01
// })


// Spawn physics based particles
var createParticles = function(amount, x, y) {
    var incremetPerIteration = 1/70
    var utils = lib_.utils
    for (var index = 0; index < amount; index++) {
        var showcase_object = utils.newCircle(x, y, 1.5, {
            color : utils.newVibrantRandomColor(Math.random(), 10),
        })

        stage.addChild(showcase_object)
        lib_.physics.addBody(showcase_object, {
            mass:20000000,
        })

        var rotation  = index*incremetPerIteration*2 * Math.PI
        var intensity = 0.015
        showcase_object.physicsObject.xSpeed = intensity*Math.cos(rotation)
        showcase_object.physicsObject.ySpeed = intensity*Math.sin(rotation)

        // lib_.timerManager.startTimer(10000, function(showcase_object) {
        //     return function() {
        //         lib_.physics.removeBody(showcase_object)
        //         showcase_object.destroy()
        //     }
        // }(showcase_object))
    }
}


// Creates a gravity source
var createGravityPoint = function(x, y, fixed, isNegative) {
    var gravityPoint = lib_.utils.newCircle(x, y, 3, {
        color : particleColors[gameMode],
        strokeWidth : 0.25,
    })
    stage.addChild(gravityPoint)

    lib_.physics.addBodyAsGravitySource(gravityPoint, {
        isAffectedByGravitySources : !fixed,
        mass : (isNegative? -1:1)*14000000000,
        fixedGravityScale : 0,
    })
}
