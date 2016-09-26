

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

for (var index = 1; index < 100; index++) {
    var color = lib_.utils.newVibrantRandomColor(Math.random(), 10)
    console.log(color)

    var rect = lib_.utils.newRectangle(Math.random() * screenRight, Math.random() * screenBottom, 5, 5, {
        color : color,
        strokeWidth : 1
    })
    stage.addChild(rect)

    // physics showcase
    lib_.physics.addBody(rect, { })
    rect.physicsObject.xSpeed = ((Math.random()*2)-1)*0.05
    rect.physicsObject.ySpeed = ((Math.random()*2)-1)*0.05
}



