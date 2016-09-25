

var NotificationManager = {}


NotificationManager.registerTable = {}


NotificationManager.register = function(notification, callback) {
    NotificationManager.registerTable[notification] = NotificationManager.registerTable[notification] || []
    var listenerArray = NotificationManager.registerTable[notification]

    listenerArray.push(callback)
}


// Thanks to http://stackoverflow.com/questions/5767325/how-to-remove-a-particular-element-from-an-array-in-javascript
NotificationManager.deregister = function(notification, callback) {
    NotificationManager.registerTable[notification] = NotificationManager.registerTable[notification] || []
    var listenerArray = NotificationManager.registerTable[notification]

    var index = listenerArray.indexOf(callback);
    if (index >= 0) {
        listenerArray.splice(index, 1);
    }

    // Remove array if empty
    if (listenerArray.length == 0) {
        delete NotificationManager.registerTable[notification]
    }
}


NotificationManager.notify = function(notification) {
    NotificationManager.registerTable[notification] = NotificationManager.registerTable[notification] || []
    var listenerArray = NotificationManager.registerTable[notification]
    var results = []

    var notificationIndex;
    for (notificationIndex = listenerArray.length-1; notificationIndex >= 0; notificationIndex--) {
        var callback = listenerArray[notificationIndex]
        results.push(callback(arguments[1]))
    }

    return results
}
