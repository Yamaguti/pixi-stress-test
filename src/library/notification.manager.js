

lib_.notificationManager = {}
lib_.notificationManager.registerTable = {}


lib_.notificationManager.register = function(notification, callback) {
    lib_.notificationManager.registerTable[notification] = lib_.notificationManager.registerTable[notification] || []
    var listenerArray = lib_.notificationManager.registerTable[notification]

    listenerArray.push(callback)
}


// Thanks to http://stackoverflow.com/questions/5767325/how-to-remove-a-particular-element-from-an-array-in-javascript
lib_.notificationManager.deregister = function(notification, callback) {
    lib_.notificationManager.registerTable[notification] = lib_.notificationManager.registerTable[notification] || []
    var listenerArray = lib_.notificationManager.registerTable[notification]

    var index = listenerArray.indexOf(callback);
    if (index >= 0) {
        listenerArray.splice(index, 1);
    }

    // Remove array if empty
    if (listenerArray.length == 0) {
        delete lib_.notificationManager.registerTable[notification]
    }
}


lib_.notificationManager.notify = function(notification) {
    lib_.notificationManager.registerTable[notification] = lib_.notificationManager.registerTable[notification] || []
    var listenerArray = lib_.notificationManager.registerTable[notification]
    var results = []

    var notificationIndex;
    for (notificationIndex = listenerArray.length-1; notificationIndex >= 0; notificationIndex--) {
        var callback = listenerArray[notificationIndex]
        results.push(callback(arguments[1]))
    }

    return results
}
