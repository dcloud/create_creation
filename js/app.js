var global = this;

var SLF = {};

requirejs.config({
    //By default load any module IDs from js/lib
    baseUrl: 'js/lib'
});

requirejs(['easeljs-0.4.2.min', 'tweenjs-0.2.0.min'],
function () {
    SLF.canvas = document.createElement('canvas');
    SLF.canvas.width = document.width;
    SLF.canvas.height = document.height;
    var body = document.getElementsByTagName('body')[0];
    body.appendChild(SLF.canvas);
    stage = new Stage(SLF.canvas);
    global.stage = stage

    SLF.animShape = new Shape();
    SLF.animShape.graphics.beginFill('rgba(255,0,0,1)').drawRect(0,0, 120, 120, 10);
    SLF.animShape.onClick = function(event) {
        SLF.shapeTween = Tween.get(SLF.animShape).to({x: (SLF.canvas.width-130), y: (SLF.canvas.height-130)}, 2500, Ease.sineOut);
    }
    stage.addChild(SLF.animShape);
    // stage.update();

    SLF.sampleText = new Text("Hello there.", "bold 24px Helvetica", "#333");
    SLF.sampleText.x = stage.canvas.width/2;
    SLF.sampleText.y = stage.canvas.height/5;
    stage.addChild(SLF.sampleText);
    SLF.textTween = Tween.get(SLF.sampleText).wait(500).to({rotation: 135, y: 3*(stage.canvas.height/5)}, 2500, Ease.sineOut);
    // stage.update();


    Ticker.addListener(window);

});

function tick() {
    global.stage.update();
}