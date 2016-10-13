
lib_.physics = {}
lib_.kinectBodies = []
lib_.gravitySources = []

lib_.physics.constant_G = 0.0000000000667408


// Add body
lib_.physics.addBody = function(displayObject, bodyProperties) {
    var physicsObject = {
        mass   : bodyProperties.mass || 1,
        xSpeed : 0,
        ySpeed : 0,
        displayObject : displayObject,
        kinect: (bodyProperties.kinect === undefined) ? true : bodyProperties.kinect
    }
    displayObject.physicsObject = physicsObject

    if (physicsObject.kinect){
        lib_.kinectBodies.push(physicsObject)
    }

    // TODO add event when displayObject is destroyed
    // I dont think this exists :(

    return physicsObject
}


// Special body, which affects gravitational field
lib_.physics.addBodyAsGravitySource = function(displayObject, bodyProperties) {
    var physicsObject = lib_.physics.addBody(displayObject, bodyProperties)
    lib_.gravitySources.push(physicsObject)

    return physicsObject
}


// Remove body
lib_.physics.removeBody = function(displayObject, bodyProperties) {
    var physicsObject = displayObject.physicsObject
    lib_.utils.removeFromArray(lib_.kinectBodies, physicsObject)
    lib_.utils.removeFromArray(lib_.gravitySources, physicsObject)
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
    // localization optimizations
    var gravityX = lib_.physics.gravity.x;
    var gravityY = lib_.physics.gravity.y;
    var constant_G = lib_.physics.constant_G

    var kinectBodies = lib_.kinectBodies;
    var amountBodies = kinectBodies.length;

    var gravitySources = lib_.gravitySources
    var gravitySourcesLenght = gravitySources.length;

    var index;
    for (index = 0; index < gravitySourcesLenght; index++) {
        var gravityObject = gravitySources[index];
        var factor = gravityObject.mass * constant_G
        var gx = gravityObject.displayObject.worldTransform.tx
        var gy = gravityObject.displayObject.worldTransform.ty

        var otherIndex;
        for (otherIndex = 0; otherIndex < amountBodies; otherIndex++) {
            var physicsObject = kinectBodies[otherIndex];
            var m             = physicsObject.mass
            var transform     = physicsObject.displayObject.worldTransform

            var dx = (gx - transform.tx)
            var dy = (gy - transform.ty)
            var distanceSquare = (dx*dx+dy*dy)

            if (distanceSquare > 100) {
                var baseForce = factor/distanceSquare*(dt/1000)
                physicsObject.xSpeed += baseForce*dx
                physicsObject.ySpeed += baseForce*dy
            }
        }
    }

    for (index = 0; index < amountBodies; index++) {
        var physicsObject = kinectBodies[index];

        physicsObject.xSpeed += gravityX*dt/1000;
        physicsObject.ySpeed += gravityY*dt/1000;
    }
}



//
// Speed
//

lib_.physics.updateSpeed = function(dt) {             // dt is given in milliseconds
    var kinectBodies = lib_.kinectBodies;
    var amountBodies = kinectBodies.length;
    var index;

    for (index = 0; index < amountBodies; index++) {
        var physicsObject = kinectBodies[index];
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
