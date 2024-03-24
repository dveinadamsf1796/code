// Define a person object
const person = {
    name: 'John Doe',
    age: 30,
    gender: 'Male',
    occupation: 'Engineer',
    isEmployed: true,

    // Method to greet
    greet: function() {
        console.log(`Hello! My name is ${this.name}.`);
    },

    // Method to introduce
    introduce: function() {
        console.log(`My name is ${this.name}. I am ${this.age} years old and I work as an ${this.occupation}.`);
    },

    // Method to check employment status
    checkEmployment: function() {
        if (this.isEmployed) {
            console.log(`${this.name} is currently employed.`);
        } else {
            console.log(`${this.name} is currently unemployed.`);
        }
    }
};

// Test the person object
person.greet();
person.introduce();
person.checkEmployment();
