SLF = {};

requirejs.config({
    //By default load any module IDs from js/lib
    baseUrl: 'js/lib'
});

requirejs(['easeljs-0.4.2.min'],
function () {
    SLF.canvas = document.createElement('canvas');
    SLF.canvas.width = document.width;
    SLF.canvas.height = document.height;
    var body = document.getElementsByTagName('body')[0];
    body.appendChild(SLF.canvas);
    SLF.stage = new Stage(SLF.canvas);

    var shape = new Shape();

    shape.graphics.beginFill('rgba(255,0,0,1)').drawRect(0,0, 120, 120, 10);

    SLF.stage.addChild(shape);
    SLF.stage.update();
});