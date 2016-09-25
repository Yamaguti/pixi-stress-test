

lib_.notificationManager = {}
lib_.notificationManager.registerTable = {}


lib_.notificationManager.register = function(notification, callback) {
    lib_.notificationManager.registerTable[notification] = (lib_.notificationManager.registerTable[notification] || []);
    var listenerArray = lib_.notificationManager.registerTable[notification];

    listenerArray.push(callback);
}


lib_.notificationManager.deregister = function(notification, callback) {
    lib_.notificationManager.registerTable[notification] = (lib_.notificationManager.registerTable[notification] || []);
    var listenerArray = lib_.notificationManager.registerTable[notification];

    lib_.utils.removeFromArray(listenerArray, callback);

    // Remove array if empty
    if (listenerArray.length == 0)
        delete lib_.notificationManager.registerTable[notification];
}


lib_.notificationManager.notify = function(notification) {
    lib_.notificationManager.registerTable[notification] = (lib_.notificationManager.registerTable[notification] || []);
    var listenerArray = lib_.notificationManager.registerTable[notification];
    var results = [];

    var notificationIndex;
    for (notificationIndex = listenerArray.length-1; notificationIndex >= 0; notificationIndex--) {
        var callback = listenerArray[notificationIndex];
        results.push(callback(arguments[1]));
    }

    return results;
}
