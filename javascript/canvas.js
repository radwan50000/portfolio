const c = document.getElementById("space-effect");

c.width = window.innerWidth;
c.height = window.innerHeight / 1.3;

const ctx = c.getContext('2d');


function getRandomNumber(max) {
  return Math.floor(Math.random() * (max - 20 + 1)) + 20;
}

let firstImage = '../images/monster.png';
let secondImage = '../images/monster2.png';
let thirdImage = '../images/monster3.png';

class monsterImage{
    constructor(x,src){
        this.x = x;
        this.y = getRandomNumber(600);
        this.dy = 2;
        this.src = src;
    }
    
    
    draw = function () {
        let image = new Image();
        image.src = this.src;
        ctx.drawImage(image, this.x, this.y, 20, 20);
    }
    update = function () {
        this.draw();
        this.y += this.dy;
        if (this.y > c.height) {
            this.x = getRandomNumber(c.width - 100);
            this.y = -80;
        }
    }
}

class Rocket{
    constructor() {
        this.x = c.width / 2 - 40;
        this.dx = 5;
    }

    draw() {
        let rocket = new Image();
        rocket.src = '../images/rocket.png';
        ctx.drawImage(rocket, this.x, c.height - 100, 40, 40);
        
    }

    update(e) {
        this.draw();
        if (this.x > e.pageX) {
            this.x -= this.dx;
        } else if (this.x < e.pageX) {
            this.x += this.dx;
        }
    }
}

let monsters = [];

let rocket = new Rocket();

c.addEventListener('mousemove', function (e) {
    rocket.update(e);
})

c.addEventListener('mouseenter', function (e) {
    rocket.update(e);
})

for (let i = 0; i < 4; i++){
    monsters.push(new monsterImage(getRandomNumber(c.width),firstImage));
}

for (let i = 0; i < 4; i++){
    monsters.push(new monsterImage(getRandomNumber(c.width),secondImage));
}

for (let i = 0; i < 4; i++){
    monsters.push(new monsterImage(getRandomNumber(c.width),thirdImage));
}


function canvasAnimate(e) {
    requestAnimationFrame(canvasAnimate);
    ctx.clearRect(0, 0, c.width, c.height);

    for (let i = 0; i < monsters.length; i++) {
        monsters[i].update();
    }

    rocket.draw();

}

canvasAnimate();

