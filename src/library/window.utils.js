
var WindowUtils = {}


// Resizing renderer to center of browser window. Credits: http://www.html5gamedevs.com/topic/18406-how-to-center-stage-on-browser/
WindowUtils.setResize = function() {
    var resizeFunction = function() {
        renderer.view.style.position = 'absolute';
        renderer.view.style.left = ((window.innerWidth - renderer.width) >> 1) + 'px';
        renderer.view.style.top  = ((window.innerHeight - renderer.height) >> 1) + 'px';
    }
    resizeFunction();
    window.addEventListener('resize', resizeFunction);
}
