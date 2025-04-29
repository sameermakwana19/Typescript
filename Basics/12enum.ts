// Enum are a special type of data type that allows a variable to be a set of predefined constants.
// Enums are a feature of TypeScript that allow you to define a set of named constants. They can be used to represent a set of related values, such as days of the week, colors, or any other set of values that can be represented as a string or number.
// Enums can be used to improve code readability and maintainability by giving meaningful names to values instead of using magic numbers or strings. They can also help prevent errors by ensuring that only valid values are used in your code.
// Enums can be defined using the enum keyword followed by the name of the enum and a set of named constants enclosed in curly braces. Each constant can be assigned a value, either explicitly or implicitly. If no value is assigned, TypeScript will automatically assign a numeric value starting from 0.

// Enums can be used in switch statements, conditional statements, and anywhere else a value is needed. They can also be used as types for function parameters and return values.

// examples of enums in TypeScript:
// 1. Basic Enum
// SUBSEQUENT VALUES ARE INCREMENTED BY 1
enum Direction {
	Up = 1,
	Down,
	Left,
	Right,
}
console.log(Direction.Up); // 1
console.log(Direction.Down); // 2
console.log(Direction.Left); // 3
console.log(Direction.Right); // 4

enum Index {
	Zero,
	One,
	Two,
	Three,
	Four,
}
console.log(Index.Zero); // 0
console.log(Index.One); // 1
console.log(Index.Two); // 2
console.log(Index.Three); // 3

const AISLE = 0;
const MIDDLE = 1;
const WINDOW = 2;

let seatAllotment: number; // valid
seatAllotment = AISLE; // valid

if (seatAllotment === AISLE) {
	// doSomething();
}

// BETTER WAY

enum seatTypes { // string literal are not incremented by 1 , we need to assign them manually
	AISLE = "aisle",
	MIDDLE = "middle",
	WINDOW = "window",
}
// enum seatTypes {
// 	AISLE = "aisle",
// 	MIDDLE = 3,
// 	WINDOW , // 4
// }

let allotedSeat: string; // valid

allotedSeat = seatTypes.MIDDLE; // valid
if (allotedSeat === seatTypes.AISLE) {
	// doSomething();
}

enum Directions {
	right = 10,
	left = 22,
	up, // 23
	down, // 24
}

// ! when enum are converted to JS, they use IFFE function to avoid polluting the global scope
// ! to generate less code use `const` before the enum keyword
// * help to keep JS code clean and small

const enum Directions2 {
	right = 10,
	left = 22,
	up, // 23
	down, // 24
}

//  only this is produced in JS
// let D = 23 /* Directions2.up */;

let D = Directions2.up;

export {};
