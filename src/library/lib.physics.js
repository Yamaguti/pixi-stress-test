
lib_.physics = {}
lib_.bodiesRegistered = []


// Add body
lib_.physics.addBody = function(displayObject, bodyProperties) {
    var physicsObject = {
        mass   : bodyProperties.mass || 1,
        xSpeed : 0,
        ySpeed : 0,
        gravityScale : 1,
        displayObject : displayObject,
    }
    displayObject.physicsObject = physicsObject
    lib_.bodiesRegistered.push(physicsObject)

    // TODO add event when displayObject is destroyed
}

// Remove body
lib_.physics.removeBody = function(displayObject, bodyProperties) {
    var physicsObject = displayObject.physicsObject
    lib_.utils.removeFromArray(lib_.bodiesRegistered, physicsObject)
}



//
// Gravity
//

lib_.physics.gravity = {
    x : 0,
    y : 0
}

// set
lib_.physics.setGravity = function(array) {
    var libPhysics = lib_.physics;

    libPhysics.gravity.x = array.x;
    libPhysics.gravity.y = array.y;
}

// gravity update
lib_.physics.updateGravity = function(dt) {
    var gravityX = lib_.physics.gravity.x;
    var gravityY = lib_.physics.gravity.y;

    var bodiesRegistered = lib_.bodiesRegistered;
    var amountBodies = bodiesRegistered.length;
    var index;

    for (index = 0; index < amountBodies; index++) {
        var physicsObject = bodiesRegistered[index];
        var gravityScale  = physicsObject.gravityScale;

        physicsObject.xSpeed += (gravityScale * gravityX)*(dt/1000);
        physicsObject.ySpeed += (gravityScale * gravityY)*(dt/1000);
    }
}



//
// Speed
//

lib_.physics.updateSpeed = function(dt) {             // dt is given in milliseconds
    var bodiesRegistered = lib_.bodiesRegistered;
    var amountBodies = bodiesRegistered.length;
    var index;

    for (index = 0; index < amountBodies; index++) {
        var physicsObject = bodiesRegistered[index];
        var displayObject = physicsObject.displayObject

        displayObject.position.x += physicsObject.xSpeed/(dt/1000)
        displayObject.position.y += physicsObject.ySpeed/(dt/1000)
    }
}



//
// Update
//

lib_.physics.update = function(dt) {
    var libPhysics = lib_.physics
    libPhysics.updateGravity(dt)
    libPhysics.updateSpeed(dt)
}
