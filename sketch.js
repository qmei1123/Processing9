var canvas;
var num = [20];
var yPosition = 150;
function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    background(50, 50, 200);
}

function draw() { 
    noFill();
    strokeWeight = 10;
    stroke(255);
    for (var i = 0; i < 4; i++) {
        ellipse(i*150 + 150, yPosition, num[0], num[0]);
        for (var x = 0; x < 100; x += 4) {
            ellipse(i*150 + 150, yPosition, num[0]*x/2, num[0]*x/2);
            for (var y = 0; y < 4; y++) {
                ellipse(i*150 + 150, yPosition+150*y, num[0]*x/2, num[0]*x/2);
 
            }
        }
    }

}