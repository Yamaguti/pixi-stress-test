
lib_.update = {}


lib_.update.logicUpdate = function(dt) {
// stats.begin();
    // Phisics update
    // Timer Update
    // Transition Update

    // Custom game update
// stats.end();
}


//
// Sets update loop
//
lib_.update.setup = function() {
    var lastUpdateTime = 0;
    var logicDt        = 1000/60;
    var lag            = 0;

    function update(currentUpdateTime) {
        requestAnimationFrame(update);

        dt = currentUpdateTime - lastUpdateTime;
        lag += dt;

        // Ensures that logic updates will be fixed
        while (lag > logicDt){
            lib_.update.logicUpdate(logicDt); // Call logic uptade
            lag -= logicDt;
        }

        lastUpdateTime = currentUpdateTime

        // render the stage
        renderer.render(stage);
    }
    requestAnimationFrame(update);
}
