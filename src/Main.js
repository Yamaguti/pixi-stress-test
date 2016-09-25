

// Adding Stat Gizmo
lib_.debug.stats.setEnabled(true)


// Lib setup
lib_.setup()


// Activate Window Resize
lib_.windowUtils.setResize()


// begin showcase

lib_.physics.setGravity({
    x : 0,
    y : 0.01
})

var rect = lib_.utils.newRectangle(centerX, centerY, 20, 20, {
    color : 0x00b300,
    strokeWidth : 2
})
stage.addChild(rect)

// physics showcase
lib_.physics.addBody(rect, { })
rect.physicsObject.xSpeed = 0.03
