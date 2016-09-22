
var stats = new Stats();
stats.showPanel(0);

document.body.appendChild(stats.dom);

function animate() {
    stats.begin();
        // monitored code goes here
    stats.end();
    requestAnimationFrame(animate);
}

requestAnimationFrame(animate);
