
var lib_ = {}


lib_.logicUpdate = function(dt) {
    // Phisics update
    // Timer Update
    // Transition Update

    // Custom game update
}

lib_.setUp = function() {
    // Creates global stage
    stage = new PIXI.Container();

    // Creates a renderer instance.
    renderer = PIXI.autoDetectRenderer(screenWidth, screenHeight, {backgroundColor : 0x1099bb});
    document.body.appendChild(renderer.view);

    // Sets update loop
    var lastUpdateTime = 0;
    var logicDt        = 1000/60;
    var lag            = 0;

    function update(currentUpdateTime) {
        requestAnimationFrame(update);

        dt = currentUpdateTime - lastUpdateTime;
        lag += dt;

        // Ensures that logic updates will be fixed
        while (lag > logicDt){
            lib_.logicUpdate(logicDt); // Call logic uptade
            lag -= logicDt;
        }

        lastUpdateTime = currentUpdateTime

        // render the stage
        renderer.render(stage);
    }
    requestAnimationFrame(update);
}
