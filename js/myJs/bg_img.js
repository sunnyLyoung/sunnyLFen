function run() {
    var image = document.getElementById('background');
    image.onload = function() {
        var engine = new RainyDay({
            image: this
        });
        engine.rain([[3, 2, 2]], 100);
    };
    image.crossOrigin = 'anonymous';
    image.src= 'img/U1Tqqdw.jpg';
}