

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

var onClick = function(mousedata) {
    for (var index = 1; index < 100; index++) {
        var rect = utils.newRectangle(mousedata.x-15, mousedata.y-130, 5, 5, {
            color : utils.newVibrantRandomColor(Math.random(), 10),
            strokeWidth : 1
        })
        stage.addChild(rect)

        // physics showcase
        lib_.physics.addBody(rect, { })
        rect.physicsObject.xSpeed = ((Math.random()*2)-1)*0.05
        rect.physicsObject.ySpeed = ((Math.random()*2)-1)*0.05
    }
}

stage.interactive = true;
stage.on('mousedown', onClick);
