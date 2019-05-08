class Animal {
    constructor (name, speed) {
        this.name = name;
        this.speed = speed;
    }


    increaseSpeed (newSpeed) {
        this.speed = newSpeed;
    }
}

var rabbit = new Animal("bugs");
console.log (rabbit);

class Mammal extends Animal {
    constructor(name, speed, extinct)
    super(name, speed);
    this.extinct = extinct;
}

var Mammal = new Mammal ("blue", 5,true);
console.log(Mammal);