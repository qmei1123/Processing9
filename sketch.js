var num = [20];
var yPosition = 150;
function setup() {
    createCanvas(800, 800);
    background(50, 50, 200);
}

function draw() { 
    background(0);
    noFill();
    strokeWeight = 10;
    stroke(255);
    for (var i = 0; i < 4; i++) {
        ellipse(i*150 + 150, yPosition, num[0], num[0]);
        for (var x = 0; x < 100; x += 4) {
            ellipse(i*150 + 150, yPosition, num[0]*x/2, num[0]*x/2);
            for (var y = 0; y < 4; y++) {
                ellipse(i*150 + 150, yPosition+150, num[0], num[0]);
 
            }
        }
    }

}