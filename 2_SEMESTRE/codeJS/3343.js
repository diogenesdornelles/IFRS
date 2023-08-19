var input = require('fs').readFileSync('stdin', 'utf-8');
var lines = input.split('\n');
const columns = [];

lines.forEach(l => {
    columns.push(l.split(' '));
})

const heigthWall = Number(columns[0][1]);

const heigthsTitans = [
    {'P': Number(columns[2][0])},
    {'M': Number(columns[2][1])},
    {'G': Number(columns[2][2])},
];

const attacksQueue = columns[1][0].split('');

class Titan {
    constructor(type, heigth) {
        this.type = type,
        this.heigth = heigth,
        this.isAlive = true
    }
    attack(wall) {
        if (this.heigth <= wall.heigth) {
            this.isAlive = false
            wall.lose_heigth(this.heigth)
        }
    }
};

class Wall {
    constructor(heigth) {
        this.heigth = heigth
    }
    lose_heigth(damage) {
        this.heigth = this.heigth - damage
    }
};

class Titans {
    constructor() {
        this.alives = []
    }
    make(type, heigth) {
        const titan = new Titan(type, heigth)
        this.add(titan)
    }
    add(titan) {
        this.alives.push(titan)
    }
};


class Walls {
    constructor() {
        this.built = []
    }
    build() {
        const wall = new Wall(heigthWall)
        this.add(wall)
    }
    add(wall) {
        this.built.push(wall)
    }
};

const walls = new Walls();

for (let i = 0; i < 1; i++) {
    walls.build()
};

const titans = new Titans();

const createAttackTitan = (attacks) => {
    attacks.forEach((attack) => {
        let heigth = heigthsTitans.filter(h => h[`${attack}`])
        titans.make(attack, heigth[0][`${attack}`])
    })
};

createAttackTitan(attacksQueue);

titans.alives.forEach(titan => {
    let lastIndex = 0;
    while (titan.isAlive) {
        walls.built.forEach((wall, index) => {
        if (index >= lastIndex) {
            titan.attack(wall)
            lastIndex = index + 1
        }
        })
        if (titan.isAlive) {
            walls.build()
        } 
    }
});

console.log(walls.built.length);