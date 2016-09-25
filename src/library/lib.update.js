
lib_.update = {}
lib_.update.customUpdates = []



// Call all custom routines
lib_.update.callCustomRoutines = function(dt) {
    var customUpdates = lib_.update.customUpdates
    var routineIndex;

    for (routineIndex = customUpdates.length-1; routineIndex >= 0; routineIndex--) {
        customUpdates[routineIndex](dt);
    }
}

// Set routine to run at every logic update
lib_.update.add = function(routine) {
    var customUpdates = lib_.update.customUpdates
    customUpdates.push(routine)
}

// Remove routine from logic update
lib_.update.remove = function(routine) {
    var customUpdates = lib_.update.customUpdates
    lib_.utils.removeFromArray(customUpdates, routine);
}



//
// Logic update
//
lib_.update.logicUpdate = function(dt) {
    lib_.debug.updateBegin()
    // Phisics update
    // Timer Update
    // Transition Update

    lib_.update.callCustomRoutines(dt);
    lib_.debug.updateEnd()
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
