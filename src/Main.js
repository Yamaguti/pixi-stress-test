

// Adding Stat Gizmo
lib_.debug.stats.setEnabled(true)


// Lib setup
lib_.setup()


// Activate Window Resize
lib_.windowUtils.setResize()


// begin showcase

lib_.physics.setGravity({
    x : 0.03,
    y : 0.01
})


var utils = lib_.utils
for (var index = 1; index < 1000; index++) {
    var rect = utils.newRectangle(Math.random() * screenRight, Math.random() * screenBottom, 5, 5, {
        color : utils.newVibrantRandomColor(Math.random(), 10),
        strokeWidth : 1
    })
    stage.addChild(rect)

    // physics showcase
    lib_.physics.addBody(rect, { })
    rect.physicsObject.xSpeed = ((Math.random()*2)-1)*0.05
    rect.physicsObject.ySpeed = ((Math.random()*2)-1)*0.05
}



