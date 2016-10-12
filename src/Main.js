

// Adding Stat Gizmo
lib_.debug.stats.setEnabled(true)


// Lib setup
lib_.setup()


// Activate Window Resize
lib_.windowUtils.setResize()


// begin showcase


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

