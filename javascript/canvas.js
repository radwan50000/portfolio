const c = document.getElementById("space-effect");

c.width = window.innerWidth;
if (window.innerWidth > 600) {
    c.height = window.innerHeight / 1.3;
} else {
    c.height = window.innerHeight * 0.5;
}

const ctx = c.getContext('2d');


function getRandomNumber(max) {
  return Math.floor(Math.random() * (max - 20 + 1)) + 20;
}

let firstImage = '../images/monster.png';
let secondImage = '../images/monster2.png';
let thirdImage = '../images/monster3.png';

class monsterImage{

    constructor(x,src,sizeW,sizeH){
        this.x = x;
        this.y = getRandomNumber(600);
        this.dy = 2;
        this.src = src;
        this.sizeW = sizeW;
        this.sizeH = sizeH;
    }
    
    draw = function () {
        let image = new Image();
        image.src = this.src;
        ctx.drawImage(image, this.x, this.y, this.sizeW, this.sizeH);
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
        this.x = e.pageX;
        this.draw();
    }
}

let monsters = [];

let rocket = new Rocket();

c.addEventListener('mousemove', function (e) {
    rocket.update(e);
});

c.addEventListener('touchmove', function (e) {
    rocket.update(e);
});

if (c.width > 600) {
    let num = 4;
    let size = 20;
    for (let i = 0; i < num; i++){
        monsters.push(new monsterImage(getRandomNumber(c.width),firstImage,size,size));
    }

    for (let i = 0; i < num; i++){
        monsters.push(new monsterImage(getRandomNumber(c.width),secondImage,size,size));
    }

    for (let i = 0; i < num; i++){
        monsters.push(new monsterImage(getRandomNumber(c.width),thirdImage,size,size));
    }
} else {
    let num = 2;
    let size = 15;
    for (let i = 0; i < num; i++){
        monsters.push(new monsterImage(getRandomNumber(c.width),firstImage,size,size));
    }

    for (let i = 0; i < num; i++){
        monsters.push(new monsterImage(getRandomNumber(c.width),secondImage,size,size));
    }

    for (let i = 0; i < num; i++){
        monsters.push(new monsterImage(getRandomNumber(c.width),thirdImage,size,size));
    }
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

