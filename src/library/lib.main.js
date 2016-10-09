
// Lib global declaration
var lib_ = {}


lib_.setup = function() {
    // Creates global stage
    stage = new PIXI.Container();
    lib_.stage = stage

    // Creates a global renderer instance.
    renderer = PIXI.autoDetectRenderer(screenWidth, screenHeight, {backgroundColor : 0x101010});
    lib_.renderer = renderer
    document.body.appendChild(renderer.view);

    //
    // Sets update loop
    //
    lib_.update.setup()
}
