

//
// Manager
//
//

var TransitionManager = {}

function startTransition(object, originalParams) {
    var animationParams = JSON.parse(JSON.stringify(originalParams));
    var totalTime       = animationParams.time;
    var startTime       = TimerManager.getTime();
    var easing          = lib_.easings[animationParams.easing || "linear"];

    delete animationParams["time"];
    delete animationParams["easing"];

    var startValues = {};
    for (var transitionParam in animationParams)
        startValues[transitionParam] = object[transitionParam];

    function animationHandler() {
        var currentValue = TimerManager.getTime()

        for (var param in animationParams) {
            var result = easing(currentValue-startTime, startValues[param], animationParams[param]-startValues[param], totalTime);
            object[param] = result;
        }

        // Schedule another step
        if (currentValue < startTime + totalTime)
            requestAnimationFrame(animationHandler);

        // End of transition
        else {
            // On complete callback, if any
            if (originalParams.onComplete)
                originalParams.onComplete();

            // Set values to final value for higher precision
            for (var param in animationParams)
                object[param] = animationParams[param];
        }
    }

    requestAnimationFrame(animationHandler);
}



// Exposed Functions
TransitionManager.startTransition = startTransition
