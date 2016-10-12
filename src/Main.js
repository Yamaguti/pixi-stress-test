

// Adding Stat Gizmo
lib_.debug.stats.setEnabled(true)


// Lib setup
lib_.setup()


// Activate Window Resize
lib_.windowUtils.setResize()


// begin showcase

var utils = lib_.utils
var physics = lib_.physics

// physics.setGravity({
//     x : 0.03,
//     y : 0.01
// })


// Spawn physics based particles
var createParticles = function(amount, x, y) {
    var incremetPerIteration = 1/70
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
    var gravityPoint = utils.newCircle(x, y, 3, {
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


// Change game mode
var gameMode    = 0
var possibleGameModes = [
    "Particles",
    "Fixed sources",
    "Moving sources",
    "-G Fixed",
    "-G Moving",
]

var particleColors = [
    0x000000,
    0xff0000,
    0xffffff,
    0x00ff00,
    0x0000ff,
]

var maxGameMode = possibleGameModes.length




// Touch
stage.hitArea     = new PIXI.Rectangle(screenLeft, screenTop, screenRight, screenBottom);
stage.interactive = true

stage.click = stage.tap = function(mousedata) {
    var position = mousedata.data.getLocalPosition(this)

    if (gameMode === 0) {
        createParticles(70, position.x, position.y)
    }
    else if (gameMode === 1) {
        createGravityPoint(position.x, position.y, true, false)
    }
    else if (gameMode == 2) {
        createGravityPoint(position.x, position.y, false, false)
    }
    else if (gameMode == 3) {
        createGravityPoint(position.x, position.y, true, true)
    }
    else if (gameMode == 4) {
        createGravityPoint(position.x, position.y, false, true)
    }
}

createUI()
console.log("tap the screen!")


// var spacing = 100
// for (var asdf = screenTop; asdf < screenBottom; asdf += spacing) {
//     for (var qwer = screenLeft; qwer < screenRight; qwer += spacing) {
//         createGravityPoint(qwer, asdf, true, false)
//     }
// }

