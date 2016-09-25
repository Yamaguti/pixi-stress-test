
// Adding Stat Gizmo
var stats = new Stats();
stats.showPanel(0);
document.body.appendChild(stats.dom);


// Lib setup
lib_.setup()


// Activate Window Resize
lib_.windowUtils.setResize()


lib_.update.add(function(dt){
    console.log(dt)
})
