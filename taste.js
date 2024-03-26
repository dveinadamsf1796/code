class Fruit {
    constructor(name, color, taste) {
        this.name = name;
        this.color = color;
        this.taste = taste;
    }

    describe() {
        console.log(`This ${this.name} is ${this.color} and tastes ${this.taste}.`);
    }
}

// Create instances of Fruit
const apple = new Fruit('apple', 'red', 'sweet');
const banana = new Fruit('banana', 'yellow', 'sweet');
const orange = new Fruit('orange', 'orange', 'citrusy');

// Describe the fruits
apple.describe();
banana.describe();
orange.describe();
