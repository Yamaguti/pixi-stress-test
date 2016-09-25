
// Manager
var TimerManager = {}



// Private Methods
function compareTimers(a,b) {
  if (a.time < b.time)
    return -1;
  if (a.time > b.time)
    return 1;
  return 0;
}


function TimerManager_update() {
    var now          = getTime();
    var timersToFire = {};

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



//Methods
function getTime() {
    var date = new Date();
    var now  = date.getTime();
    return now
}


function startTimer(timeToFire, callback) {
    TimerManager.registeredTimers[Utils.newRandomString()] = {
        "callback" : callback,
        "time"     : getTime() + timeToFire,
    }
}



// Initialization
TimerManager.registeredTimers = {}

// Exposed Functions
TimerManager.getTime          = getTime
TimerManager.startTimer       = startTimer
TimerManager.update           = TimerManager_update
