
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


// Create UI
var createUI = function() {
    var buttonWidth  = 160
    var buttonHeight = 50
    var buttonOffset = 20

    var button = newButton(buttonWidth, buttonHeight, {
        color : 0x45a5a0,
        onRelease: function() {
            gameMode += 1
            gameMode = gameMode%maxGameMode

            gameModeLabel.text = possibleGameModes[gameMode]
        }
    })
    button.x = screenLeft   + buttonWidth*.5  + buttonOffset
    button.y = screenBottom - buttonHeight*.5 - buttonOffset
    stage.addChild(button)

    var gameModeLabel = new PIXI.Text(possibleGameModes[gameMode], {
        fontFamily : 'Arial', fontSize: 22, fill : 0xffffff, align : 'center'
    });
    stage.addChild(gameModeLabel)
    gameModeLabel.x = button.x; gameModeLabel.y = button.y
    gameModeLabel.anchor.x = 0.5; gameModeLabel.anchor.y = 0.5


    var reloadButton = newButton(buttonWidth, buttonHeight, {
        color : 0xf53530,
        onRelease: function() {
            location.reload();
        }
    })
    reloadButton.x = button.x + buttonWidth + buttonOffset
    reloadButton.y = button.y
    stage.addChild(reloadButton)

    var reloadLabel = new PIXI.Text("Reload", {
        fontFamily : 'Arial', fontSize: 22, fill : 0xffffff, align : 'center'
    });
    stage.addChild(reloadLabel)
    reloadLabel.x = reloadButton.x; reloadLabel.y = reloadButton.y
    reloadLabel.anchor.x = 0.5; reloadLabel.anchor.y = 0.5
}
