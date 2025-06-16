class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }
}

// Object बनाना
const person1 = new Person("Kuldeep", 25);
console.log(person1.greet()); 
