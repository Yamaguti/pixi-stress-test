
lib_.debug = {}


// No op
lib_.debug.noop = function() { }


lib_.debug.updateBegin = lib_.debug.noop
lib_.debug.updateEnd   = lib_.debug.noop

// TODO expose an interface to register and deregister
// callbacks to play at updateBegin and updateEnd. Instead
// of switching references like I did.
