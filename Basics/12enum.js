"use strict";
// Enum are a special type of data type that allows a variable to be a set of predefined constants.
// Enums are a feature of TypeScript that allow you to define a set of named constants. They can be used to represent a set of related values, such as days of the week, colors, or any other set of values that can be represented as a string or number.
// Enums can be used to improve code readability and maintainability by giving meaningful names to values instead of using magic numbers or strings. They can also help prevent errors by ensuring that only valid values are used in your code.
// Enums can be defined using the enum keyword followed by the name of the enum and a set of named constants enclosed in curly braces. Each constant can be assigned a value, either explicitly or implicitly. If no value is assigned, TypeScript will automatically assign a numeric value starting from 0.
Object.defineProperty(exports, "__esModule", { value: true });
// Enums can be used in switch statements, conditional statements, and anywhere else a value is needed. They can also be used as types for function parameters and return values.
// examples of enums in TypeScript:
// 1. Basic Enum
// SUBSEQUENT VALUES ARE INCREMENTED BY 1
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 1] = "Up";
    Direction[Direction["Down"] = 2] = "Down";
    Direction[Direction["Left"] = 3] = "Left";
    Direction[Direction["Right"] = 4] = "Right";
})(Direction || (Direction = {}));
console.log(Direction.Up); // 1
console.log(Direction.Down); // 2
console.log(Direction.Left); // 3
console.log(Direction.Right); // 4
var Index;
(function (Index) {
    Index[Index["Zero"] = 0] = "Zero";
    Index[Index["One"] = 1] = "One";
    Index[Index["Two"] = 2] = "Two";
    Index[Index["Three"] = 3] = "Three";
    Index[Index["Four"] = 4] = "Four";
})(Index || (Index = {}));
console.log(Index.Zero); // 0
console.log(Index.One); // 1
console.log(Index.Two); // 2
console.log(Index.Three); // 3
const AISLE = 0;
const MIDDLE = 1;
const WINDOW = 2;
let seatAllotment; // valid
seatAllotment = AISLE; // valid
if (seatAllotment === AISLE) {
    // doSomething();
}
// BETTER WAY
var seatTypes;
(function (seatTypes) {
    seatTypes["AISLE"] = "aisle";
    seatTypes["MIDDLE"] = "middle";
    seatTypes["WINDOW"] = "window";
})(seatTypes || (seatTypes = {}));
// enum seatTypes {
// 	AISLE = "aisle",
// 	MIDDLE = 3,
// 	WINDOW , // 4
// }
let allotedSeat; // valid
allotedSeat = seatTypes.MIDDLE; // valid
if (allotedSeat === seatTypes.AISLE) {
    // doSomething();
}
var Directions;
(function (Directions) {
    Directions[Directions["right"] = 10] = "right";
    Directions[Directions["left"] = 22] = "left";
    Directions[Directions["up"] = 23] = "up";
    Directions[Directions["down"] = 24] = "down";
})(Directions || (Directions = {}));
//  only this is produced in JS
// let D = 23 /* Directions2.up */;
let D = 23 /* Directions2.up */;
