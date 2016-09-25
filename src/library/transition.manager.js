

//
// Manager
//
//

var TransitionManager = {}

function startTransition(object, originalParams) {
    var animationParams = JSON.parse(JSON.stringify(originalParams));
    var totalTime       = animationParams.time;
    var startTime       = TimerManager.getTime();
    var easing          = Easings[animationParams.easing || "linear"];

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

        if (currentValue < startTime + totalTime)
            requestAnimationFrame(animationHandler);

        // end of transition
        else {
            // on complete callback, if any
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
