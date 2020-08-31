class Box extends BaseClass {
    constructor(x, y, width, height) {
        super(x, y, width, height);
        this.image = loadImage("sprites/wood1.png");
        this.Visibility = 255;
    }
    display() {
        if (this.body.speed < 3) {
            super.display();
        }
        else {
            World.remove(world, this.body);
            push();
            this.Visibility = this.Visibility - 5;
            tint(255, this.Visibility);
            image(this.image, this.body.position.x, this.body.position.y, 50, 50);
            pop();
        }
    }
};

function score() {
    if (this.visibility < 0 && this.visibility > - 105) {
        score++;
    }
    block1.score();
    block2.score();
    block3.score();
    block4.score();
    block5.score();
    block6.score();
    block7.score();
    block8.score();
    block9.score();
    block10.score();
    block11.score();
    block12.score();
    block13.score();
    block14.score();
    block15.score();
    block16.score();
}