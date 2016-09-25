
// Easings, thanks: http://gizma.com/easing/
// t : currentTime
// b : startValue
// c : change in value (finalValue-startValue)
// d : duration

lib_.easings = {}

// simple linear tweening - no easing, no acceleration
lib_.easings.linear = function (t, b, c, d) {
    return c*t/d + b;
};
// quadratic easing in - accelerating from zero velocity
lib_.easings.inQuad = function (t, b, c, d) {
    t /= d;
    return c*t*t + b;
};
// quadratic easing out - decelerating to zero velocity
lib_.easings.outQuad = function (t, b, c, d) {
    t /= d;
    return -c * t*(t-2) + b;
};
// quadratic easing in/out - acceleration until halfway, then deceleration
lib_.easings.inOutQuad = function (t, b, c, d) {
    t /= d/2;
    if (t < 1) return c/2*t*t + b;
    t--;
    return -c/2 * (t*(t-2) - 1) + b;
};
// cubic easing in - accelerating from zero velocity
lib_.easings.inCubic = function (t, b, c, d) {
    t /= d;
    return c*t*t*t + b;
};
// cubic easing out - decelerating to zero velocity
lib_.easings.outCubic = function (t, b, c, d) {
    t /= d;
    t--;
    return c*(t*t*t + 1) + b;
};
// cubic easing in/out - acceleration until halfway, then deceleration
lib_.easings.inOutCubic = function (t, b, c, d) {
    t /= d/2;
    if (t < 1) return c/2*t*t*t + b;
    t -= 2;
    return c/2*(t*t*t + 2) + b;
};
// quartic easing in - accelerating from zero velocity
lib_.easings.inQuart = function (t, b, c, d) {
    t /= d;
    return c*t*t*t*t + b;
};
// quartic easing out - decelerating to zero velocity
lib_.easings.outQuart = function (t, b, c, d) {
    t /= d;
    t--;
    return -c * (t*t*t*t - 1) + b;
},
// quartic easing in/out - acceleration until halfway, then deceleration
lib_.easings.inOutQuart = function (t, b, c, d) {
    t /= d/2;
    if (t < 1) return c/2*t*t*t*t + b;
    t -= 2;
    return -c/2 * (t*t*t*t - 2) + b;
};
// quintic easing in - accelerating from zero velocity
lib_.easings.inQuint = function (t, b, c, d) {
    t /= d;
    return c*t*t*t*t*t + b;
};
// quintic easing out - decelerating to zero velocity
lib_.easings.outQuint = function (t, b, c, d) {
    t /= d;
    t--;
    return c*(t*t*t*t*t + 1) + b;
};
// quintic easing in/out - acceleration until halfway, then deceleration
lib_.easings.inOutQuint = function (t, b, c, d) {
    t /= d/2;
    if (t < 1) return c/2*t*t*t*t*t + b;
    t -= 2;
    return c/2*(t*t*t*t*t + 2) + b;
};
// sinusoidal easing in - accelerating from zero velocity
lib_.easings.inSine = function (t, b, c, d) {
    return -c * lib_.easings.cos(t/d * (Math.PI/2)) + c + b;
};
// sinusoidal easing out - decelerating to zero velocity
lib_.easings.outSine = function (t, b, c, d) {
    return c * lib_.easings.sin(t/d * (Math.PI/2)) + b;
};
// sinusoidal easing in/out - accelerating until halfway, then decelerating
lib_.easings.inOutSine = function (t, b, c, d) {
    return -c/2 * (lib_.easings.cos(Math.PI*t/d) - 1) + b;
};
// exponential easing in - accelerating from zero velocity
lib_.easings.inExpo = function (t, b, c, d) {
    return c * lib_.easings.pow( 2, 10 * (t/d - 1) ) + b;
};
// exponential easing out - decelerating to zero velocity
lib_.easings.outExpo = function (t, b, c, d) {
    return c * ( -lib_.easings.pow( 2, -10 * t/d ) + 1 ) + b;
};
// exponential easing in/out - accelerating until halfway, then decelerating
lib_.easings.inOutExpo = function (t, b, c, d) {
    t /= d/2;
    if (t < 1) return c/2 * lib_.easings.pow( 2, 10 * (t - 1) ) + b;
    t--;
    return c/2 * ( -lib_.easings.pow( 2, -10 * t) + 2 ) + b;
};
// circular easing in - accelerating from zero velocity
lib_.easings.inCirc = function (t, b, c, d) {
    t /= d;
    return -c * (Math.sqrt(1 - t*t) - 1) + b;
};
// circular easing out - decelerating to zero velocity
lib_.easings.outCirc = function (t, b, c, d) {
    t /= d;
    t--;
    return c * Math.sqrt(1 - t*t) + b;
};
// circular easing in/out - acceleration until halfway, then deceleration
lib_.easings.inOutCirc = function (t, b, c, d) {
    t /= d/2;
    if (t < 1) return -c/2 * (Math.sqrt(1 - t*t) - 1) + b;
    t -= 2;
    return c/2 * (Math.sqrt(1 - t*t) + 1) + b;
};


// More Easings, thanks to https://github.com/danro/jquery-easing/blob/master/jquery.easing.js
lib_.easings.outBack = function (t, b, c, d) {
    s = 1.70158;
    return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
};

lib_.easings.inBack = function (t, b, c, d) {
    s = 1.70158;
    return c*(t/=d)*t*((s+1)*t - s) + b;
};

lib_.easings.inOutBack = function (t, b, c, d) {
    if (s == undefined) s = 1.70158;
    if ((t/=d/2) < 1) return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
    return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
};

lib_.easings.inBounce = function (t, b, c, d) {
    return c - lib_.easings.outBounce (d-t, 0, c, d) + b;
}

lib_.easings.outBounce =function (t, b, c, d) {
    if ((t/=d) < (1/2.75)) {
        return c*(7.5625*t*t) + b;
    } else if (t < (2/2.75)) {
        return c*(7.5625*(t-=(1.5/2.75))*t + .75) + b;
    } else if (t < (2.5/2.75)) {
        return c*(7.5625*(t-=(2.25/2.75))*t + .9375) + b;
    } else {
        return c*(7.5625*(t-=(2.625/2.75))*t + .984375) + b;
    }
}

lib_.easings.inOutBounce = function (t, b, c, d) {
    if (t < d/2) return lib_.easings.inBounce (t*2, 0, c, d) * .5 + b;
    return lib_.easings.outBounce (t*2-d, 0, c, d) * .5 + c*.5 + b;
}
