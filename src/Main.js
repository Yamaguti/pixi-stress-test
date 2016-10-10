

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


// Buttons
var newButton = function(width, height, buttonParams) {
    var button = lib_.utils.newRectangle(0, 0, width, height, {
        color : buttonParams.color,
        strokeWidth : 2,
    })

    button.interactive = true
    button.pivot.x = width  * 0.5; button.pivot.y = height * 0.5

    button.normalScale  = function(){ this.scale.x = 1; this.scale.y = 1 }
    button.pressedScale = function(){ this.scale.x = 0.8; this.scale.y = 0.8 }

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

// Change game mode
var gameMode    = 0
var maxGameMode = 2

var possibleGameModes = {
    0: "Particles",
    1: "G. sources",
}

var buttonWidth  = 140
var buttonHeight = 50
var button = newButton(buttonWidth, buttonHeight, {
    color : 0x45a5a0,
    onRelease: function() {
        gameMode += 1
        gameMode = gameMode%maxGameMode

        gameModeLabel.text = possibleGameModes[gameMode]
    }
})
button.x = screenLeft   + buttonWidth*.5  + 20
button.y = screenBottom - buttonHeight*.5 - 20
stage.addChild(button)


var gameModeLabel = new PIXI.Text(possibleGameModes[gameMode], {
    fontFamily : 'Arial', fontSize: 22, fill : 0xffffff, align : 'center'
});
stage.addChild(gameModeLabel)
gameModeLabel.x = button.x
gameModeLabel.y = button.y
gameModeLabel.anchor.x = 0.5
gameModeLabel.anchor.y = 0.5


// Touch
stage.hitArea     = new PIXI.Rectangle(screenLeft, screenTop, screenRight, screenBottom);
stage.interactive = true

stage.click = stage.tap = function(mousedata) {
    var position = mousedata.data.getLocalPosition(this)

    if (gameMode === 0) {
        createParticles(100, position.x, position.y)

    } else {
        createGravityPoint(position.x, position.y)
    }
}

console.log("tap the screen!")
