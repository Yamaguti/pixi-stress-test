

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
    var fixed
    var isNegative

    if (gameMode === 0) {
        createParticles(70, position.x, position.y)
        return
    }
    else if (gameMode === 1) {
        fixed      = true
        isNegative = false
    }
    else if (gameMode == 2) {
        fixed      = false
        isNegative = false
        createGravityPoint(position.x, position.y, false, false)
    }
    else if (gameMode == 3) {
        fixed      = true
        isNegative = true
    }
    else if (gameMode == 4) {
        fixed      = false
        isNegative = true
    }
    createGravityPoint(position.x, position.y, fixed, isNegative)
}



// debug
var fakeClick = function(x, y) {
    stage.click({
        data: {
            getLocalPosition: function() {
                return {x: x, y: y}
            }
        }
    })
}

var spacing = 100
var smallSpacing = 7


// gameMode = 1
// for (var line = screenTop; line < screenBottom; line += spacing) {
//     for (var col = screenLeft; col < screenRight; col += spacing) {
//         fakeClick(col, line)
//     }
// }

// gameMode = 0
// var dots = 12
// var _intensity = 100
// for (var _amount = 1; _amount <= dots; _amount += 1) {
//     var rotation = _amount/dots * (2 * Math.PI)
//     var x = _intensity*Math.cos(rotation)
//     var y = _intensity*Math.sin(rotation)
//     fakeClick(x + centerX, y + centerY)
// }


// gameMode = 1
// for (var _intensity = 100; _intensity <= 300; _intensity += spacing) {
//     var _maxAmount = _intensity

//     for (var _amount = 0; _amount <= _maxAmount; _amount += 10) {
//         var rotation = _amount/_maxAmount * (2 * Math.PI)
//         var x = _intensity*Math.cos(rotation)
//         var y = _intensity*Math.sin(rotation)
//         fakeClick(x + centerX, y + centerY)
//     }
// }

// lib_.timerManager.startTimer(1000, function() {
//     createParticles(10, centerX, centerY)
// }, -1)

// gameMode = 1
// fakeClick(centerX, centerY - 100)


gameMode = 0
createUI()
console.log("tap the screen!")
