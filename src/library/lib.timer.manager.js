
// Manager
lib_.timerManager = {}

// Initialization
lib_.timerManager.registeredTimers = {}


//
// Update
//
lib_.timerManager.update = function(dt) {
    var now          = performance.now();
    var timersToFire = {};
    var TimerManager = lib_.timerManager

    for (var timerId in TimerManager.registeredTimers) {
        var timer = TimerManager.registeredTimers[timerId]
        if (now >= timer.time) {
            timersToFire[timerId] = true
        }
    }

    for (var timerId in timersToFire) {
        var timer = TimerManager.registeredTimers[timerId]
        delete TimerManager.registeredTimers[timerId];
        timer.callback()
    }
}

var uid_counter = 0
function _getUniqueId_() {
    uid_counter += 1
    return String(uid_counter)
}


//
// Metods
//
lib_.timerManager.startTimer = function(timeToFire, callback) {
    lib_.timerManager.registeredTimers[_getUniqueId_()] = {
        "callback" : callback,
        "time"     : performance.now() + timeToFire,
    }
}
