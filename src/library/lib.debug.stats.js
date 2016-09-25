
lib_.debug.stats = {};
lib_.debug.stats.enabled = false;



//
// Set Enabled
//
lib_.debug.stats.setEnabled = function(enabled) {
    var statsLib = lib_.debug.stats

    if (enabled !== statsLib.enabled) {
        if (enabled)
            statsLib.activate();
        else
            statsLib.deactivate();
    }
}

// Activate
lib_.debug.stats.activate = function() {
    var libDebug = lib_.debug
    var stats = new Stats();

    stats.showPanel(0);
    libDebug.stats.gizmo = stats
    libDebug.stats.enabled = true

    document.body.appendChild(stats.dom);

    libDebug.updateBegin = stats.begin
    libDebug.updateEnd   = stats.end
}

// Deactivate
lib_.debug.stats.deactivate = function() {
    var libDebug = lib_.debug
    libDebug.stats.enabled = false

    libDebug.updateBegin = libDebug.noop
    libDebug.updateEnd = libDebug.noop
}


// Set Enable
lib_.debug.setStatsEnabled = lib_.debug.stats.setEnabled
