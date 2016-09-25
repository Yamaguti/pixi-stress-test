
// Easings, thankx: http://gizma.com/easing/
// t : currentTime
// b : startValue
// c : change in value
// d : duration

var Easings = {}

// simple linear tweening - no easing, no acceleration
Easings.linear = function (t, b, c, d) {
    return c*t/d + b;
};
// quadratic easing in - accelerating from zero velocity
Easings.inQuad = function (t, b, c, d) {
    t /= d;
    return c*t*t + b;
};
// quadratic easing out - decelerating to zero velocity
Easings.outQuad = function (t, b, c, d) {
    t /= d;
    return -c * t*(t-2) + b;
};
// quadratic easing in/out - acceleration until halfway, then deceleration
Easings.inOutQuad = function (t, b, c, d) {
    t /= d/2;
    if (t < 1) return c/2*t*t + b;
    t--;
    return -c/2 * (t*(t-2) - 1) + b;
};
// cubic easing in - accelerating from zero velocity
Easings.inCubic = function (t, b, c, d) {
    t /= d;
    return c*t*t*t + b;
};
// cubic easing out - decelerating to zero velocity
Easings.outCubic = function (t, b, c, d) {
    t /= d;
    t--;
    return c*(t*t*t + 1) + b;
};
// cubic easing in/out - acceleration until halfway, then deceleration
Easings.inOutCubic = function (t, b, c, d) {
    t /= d/2;
    if (t < 1) return c/2*t*t*t + b;
    t -= 2;
    return c/2*(t*t*t + 2) + b;
};
// quartic easing in - accelerating from zero velocity
Easings.inQuart = function (t, b, c, d) {
    t /= d;
    return c*t*t*t*t + b;
};
// quartic easing out - decelerating to zero velocity
Easings.outQuart = function (t, b, c, d) {
    t /= d;
    t--;
    return -c * (t*t*t*t - 1) + b;
},
// quartic easing in/out - acceleration until halfway, then deceleration
Easings.inOutQuart = function (t, b, c, d) {
    t /= d/2;
    if (t < 1) return c/2*t*t*t*t + b;
    t -= 2;
    return -c/2 * (t*t*t*t - 2) + b;
};
// quintic easing in - accelerating from zero velocity
Easings.inQuint = function (t, b, c, d) {
    t /= d;
    return c*t*t*t*t*t + b;
};
// quintic easing out - decelerating to zero velocity
Easings.outQuint = function (t, b, c, d) {
    t /= d;
    t--;
    return c*(t*t*t*t*t + 1) + b;
};
// quintic easing in/out - acceleration until halfway, then deceleration
Easings.inOutQuint = function (t, b, c, d) {
    t /= d/2;
    if (t < 1) return c/2*t*t*t*t*t + b;
    t -= 2;
    return c/2*(t*t*t*t*t + 2) + b;
};
// sinusoidal easing in - accelerating from zero velocity
Easings.inSine = function (t, b, c, d) {
    return -c * Easings.cos(t/d * (Easings.PI/2)) + c + b;
};
// sinusoidal easing out - decelerating to zero velocity
Easings.outSine = function (t, b, c, d) {
    return c * Easings.sin(t/d * (Easings.PI/2)) + b;
};
// sinusoidal easing in/out - accelerating until halfway, then decelerating
Easings.inOutSine = function (t, b, c, d) {
    return -c/2 * (Easings.cos(Easings.PI*t/d) - 1) + b;
};
// exponential easing in - accelerating from zero velocity
Easings.inExpo = function (t, b, c, d) {
    return c * Easings.pow( 2, 10 * (t/d - 1) ) + b;
};
// exponential easing out - decelerating to zero velocity
Easings.outExpo = function (t, b, c, d) {
    return c * ( -Easings.pow( 2, -10 * t/d ) + 1 ) + b;
};
// exponential easing in/out - accelerating until halfway, then decelerating
Easings.inOutExpo = function (t, b, c, d) {
    t /= d/2;
    if (t < 1) return c/2 * Easings.pow( 2, 10 * (t - 1) ) + b;
    t--;
    return c/2 * ( -Easings.pow( 2, -10 * t) + 2 ) + b;
};
// circular easing in - accelerating from zero velocity
Easings.inCirc = function (t, b, c, d) {
    t /= d;
    return -c * (Math.sqrt(1 - t*t) - 1) + b;
};
// circular easing out - decelerating to zero velocity
Easings.outCirc = function (t, b, c, d) {
    t /= d;
    t--;
    return c * Math.sqrt(1 - t*t) + b;
};
// circular easing in/out - acceleration until halfway, then deceleration
Easings.inOutCirc = function (t, b, c, d) {
    t /= d/2;
    if (t < 1) return -c/2 * (Math.sqrt(1 - t*t) - 1) + b;
    t -= 2;
    return c/2 * (Math.sqrt(1 - t*t) + 1) + b;
};


// More Easings, thanks to https://github.com/danro/jquery-easing/blob/master/jquery.easing.js
Easings.outBack = function (t, b, c, d) {
    s = 1.70158;
    return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
};

Easings.inBack = function (t, b, c, d) {
    s = 1.70158;
    return c*(t/=d)*t*((s+1)*t - s) + b;
};

Easings.inOutBack = function (t, b, c, d) {
    if (s == undefined) s = 1.70158;
    if ((t/=d/2) < 1) return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
    return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
};

Easings.inBounce = function (t, b, c, d) {
    return c - Easings.outBounce (d-t, 0, c, d) + b;
}

Easings.outBounce =function (t, b, c, d) {
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

Easings.inOutBounce = function (t, b, c, d) {
    if (t < d/2) return Easings.inBounce (t*2, 0, c, d) * .5 + b;
    return Easings.outBounce (t*2-d, 0, c, d) * .5 + c*.5 + b;
}
