

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
    color : 0x00b300
})
stage.addChild(rect)

lib_.physics.addBody(rect, {

})
