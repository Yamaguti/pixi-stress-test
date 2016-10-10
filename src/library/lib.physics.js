
lib_.physics = {}
lib_.bodiesRegistered = []
lib_.bodiesWithGravityField = []

lib_.physics.constant_G = 0.0000000000667408


// Add body
lib_.physics.addBody = function(displayObject, bodyProperties) {
    var physicsObject = {
        mass   : bodyProperties.mass || 1,
        xSpeed : 0,
        ySpeed : 0,
        displayObject : displayObject,

        fixedGravityScale : (bodyProperties.fixedGravityScale === undefined) ? 1 : bodyProperties.fixedGravityScale,
        isAffectedByGravityField : (bodyProperties.isAffectedByGravityField === undefined) ? true : bodyProperties.isAffectedByGravityField,
        hasGravityField   : bodyProperties.hasGravityField,
    }
    displayObject.physicsObject = physicsObject
    lib_.bodiesRegistered.push(physicsObject)


    if (physicsObject.hasGravityField) {
        lib_.bodiesWithGravityField.push(physicsObject)
    }

    // TODO add event when displayObject is destroyed
    // I dont think this exists :(
}


// Special body, which affects gravitational field
lib_.physics.addBodyAsGravitySource = function(displayObject, bodyProperties) {
    bodyProperties.hasGravityField = true
    lib_.physics.addBody(displayObject, bodyProperties)
}


// Remove body
lib_.physics.removeBody = function(displayObject, bodyProperties) {
    var physicsObject = displayObject.physicsObject
    lib_.utils.removeFromArray(lib_.bodiesRegistered, physicsObject)
    lib_.utils.removeFromArray(lib_.bodiesWithGravityField, physicsObject)
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
    var sign       = PIXI.utils.sign

    var bodiesRegistered = lib_.bodiesRegistered;
    var amountBodies     = bodiesRegistered.length;

    var bodiesWithGravityField = lib_.bodiesWithGravityField
    var bodiesWithGravityFieldLenght = bodiesWithGravityField.length;

    var index;
    for (index = 0; index < bodiesWithGravityFieldLenght; index++) {
        var gravityObject = bodiesWithGravityField[index];

        var otherIndex;
        for (otherIndex = 0; otherIndex < amountBodies; otherIndex++) {
            var physicsObject = bodiesRegistered[otherIndex];
            var M = gravityObject.mass
            var m = physicsObject.mass

            if (gravityObject !== physicsObject) {
                var dx = (gravityObject.displayObject.worldTransform.tx - physicsObject.displayObject.worldTransform.tx)
                var dy = (gravityObject.displayObject.worldTransform.ty - physicsObject.displayObject.worldTransform.ty)

                var distanceSquare = (dx*dx+dy*dy) || 1
                var baseForce = constant_G/distanceSquare*(dt/1000)

                if (physicsObject.isAffectedByGravityField) {
                    physicsObject.xSpeed += baseForce*M*dx
                    physicsObject.ySpeed += baseForce*M*dy
                }
                if (gravityObject.isAffectedByGravityField) {
                    physicsObject.xSpeed += baseForce*m*dx
                    physicsObject.ySpeed += baseForce*m*dy
                }
            }
        }
    }

    for (index = 0; index < amountBodies; index++) {
        var physicsObject = bodiesRegistered[index];
        var fixedGravityScale = physicsObject.fixedGravityScale;

        physicsObject.xSpeed += (fixedGravityScale * gravityX)*(dt/1000);
        physicsObject.ySpeed += (fixedGravityScale * gravityY)*(dt/1000);
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
