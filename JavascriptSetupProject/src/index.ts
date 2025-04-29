import "./pub-private.js";

// let id: number;

// id = 9;

// console.log(id);

//* CLASS

class User {
	name: string;
	email: string;
	// city: string; -> error , need to compulsory initialize as we are not using initializing through constructor
	city: string = "pune";
	readonly _id: number = Math.random(); // readonly property, can't be changed after initialization

	constructor(email: string, name: string) {
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
	readonly id: number = Math.random();
	private readonly name: string = "sam";

	//  private num1 -> typescript syntax
	// #num1 -> javascript syntax

	//   In TypeScript, the readonly modifier allows properties to be assigned values in two places:

	// At their declaration (initialization)
	// Inside the class constructor

	constructor() {
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
	constructor(
		public readonly id: number = Math.random(),
		private readonly name: string
	) {
		this.id;
		this.name = name;
	}
}

// GETTER AND SETTER
class Test3 {
	private _name: string = "sam";

	constructor(name: string) {
		this._name = name;
	}

	get name(): string {
		// get keyword is used to define a getter method
		return this._name;
	}

	set name(name: string) {
		// set keyword is used to define a setter method
		this._name = name;
	}

	// ! INTERVIEW QUESTION
	// ! we can't define the return type of setter method, it will always be void
	//* set name(name: string): void   -> ERROR, can't define return type of setter method

	// ! when we define setter method, we can use the same name as the property name
	// ! but when we define getter method, we can't use the same name as the property name
}

// Inheritance in class

class Person {
	private id: number = Math.random(); // private property, can't be accessed outside the class
	protected family: string = "family"; // protected property, can be accessed in child class but not outside the class
	name: string;
	age: number;
	constructor(name: string, age: number) {
		this.name = name;
		this.age = age;
	}
}

class Employee extends Person {
	email: string;
	constructor(name: string, age: number, email: string) {
		super(name, age); // call the constructor of the parent class
		this.email = email;
	}
	// ! we can't override the constructor of the parent class, we can only call it
	//! but we can override the methods of the parent class
}

//  private variable -> only accessible inside the class not to child class
//  protected variable -> accessible inside the class and child class but not outside the class
// private method -> only accessible inside the class not to child class
// protected method -> accessible inside the class and child class but not outside the class
// public method -> accessible inside the class and child class and outside the class

class Admin extends Person {
	role: string;
	constructor(name: string, age: number, role: string, family?: string) {
		super(name, age); // call the constructor of the parent class
		this.role = role;
		this.family = family || "default"; // call the constructor of the
		// this.id = 8; // error
	}
}

//

interface TakePhoto {
	cameraMode: string;
	filter: string;
	burst: number;
}

class Instagram implements TakePhoto {
	constructor(
		public cameraMode: string,
		public filter: string,
		public burst: number
	) {
		this.cameraMode = cameraMode;
		this.filter = filter;
		this.burst = burst;
	}
}
