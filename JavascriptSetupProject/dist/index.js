import "./pub-private.js";
// let id: number;
// id = 9;
// console.log(id);
//* CLASS
class User {
    constructor(email, name) {
        // city: string; -> error , need to compulsory initialize as we are not using initializing through constructor
        this.city = "pune";
        this._id = Math.random(); // readonly property, can't be changed after initialization
        this.email = email;
        this.name = name;
    }
}
const sam = new User("sa@sa.com", "sam");
// const sam2 = new User(); --> compulsory
// city can't be number
// sam.city = 9;
console.log({ city: sam.city });
// TODO READONLY vs PRIVATE
// readonly - can be used outside the class but can't be changed
// private - can't be used outside the class but can be changed inside the class
//readonly private - can't be used outside the class and can't be changed inside the class
class Test {
    //  private num1 -> typescript syntax
    // #num1 -> javascript syntax
    //   In TypeScript, the readonly modifier allows properties to be assigned values in two places:
    // At their declaration (initialization)
    // Inside the class constructor
    constructor() {
        this.id = Math.random();
        this.name = "sam";
        this.id = 9; // can be changed inside the class
        this.name = "sam"; // can be changed inside the class
        // Understanding Readonly and Access Modifiers in TypeScript
    }
    changeName() {
        // this.name = "sam2"; // ERROR, can't be changed inside the class
    }
}
// BETTER WAY
class Test2 {
    constructor(id = Math.random(), name) {
        this.id = id;
        this.name = name;
        this.id;
        this.name = name;
    }
}
// GETTER AND SETTER
class Test3 {
    constructor(name) {
        this._name = "sam";
        this._name = name;
    }
    get name() {
        // get keyword is used to define a getter method
        return this._name;
    }
    set name(name) {
        // set keyword is used to define a setter method
        this._name = name;
    }
}
// Inheritance in class
class Person {
    constructor(name, age) {
        this.id = Math.random(); // private property, can't be accessed outside the class
        this.family = "family"; // protected property, can be accessed in child class but not outside the class
        this.name = name;
        this.age = age;
    }
}
class Employee extends Person {
    constructor(name, age, email) {
        super(name, age); // call the constructor of the parent class
        this.email = email;
    }
}
//  private variable -> only accessible inside the class not to child class
//  protected variable -> accessible inside the class and child class but not outside the class
// private method -> only accessible inside the class not to child class
// protected method -> accessible inside the class and child class but not outside the class
// public method -> accessible inside the class and child class and outside the class
class Admin extends Person {
    constructor(name, age, role, family) {
        super(name, age); // call the constructor of the parent class
        this.role = role;
        this.family = family || "default"; // call the constructor of the
        // this.id = 8; // error
    }
}
class Instagram {
    constructor(cameraMode, filter, burst) {
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
    }
}
