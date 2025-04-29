// TUPLES -> tuples are arrays with fixed length and known data types
// syntax: [type1, type2, type3]

// const user: (string | number)[] = ["sameer",19, "khan"]  or [19, "sameer,"khan"] -> both are valid

const user: [string, number, boolean] = ["sameer", 23, true]; // tuple of string, number and boolean
//* array with value in PRECISE order -> [0] = string, [1] = number, [2] = boolean
// user[0] = 1; // error: Type 'number' is not assignable to type 'string'.

type rgbType = [number, number, number]; // tuple of 3 numbers

let rgb: rgbType = [255, 255, 255]; // tuple of 3 numbers
// rgb[0] = "255"; // error: Type 'string' is not assignable to type 'number'.

// we can overwrite the values in the tuple
rgb[0] = 0; // valid -> can configure it immutable throught ts config file

// also we can push and pop the values in the tuple or any other array method
rgb.push(255); // valid -> but not recommended

// ! to avoid usage of methods on tuples, we can use readonly keyword or const keyword
const rgb2: readonly [number, number, number] = [255, 255, 255]; // readonly tuple of 3 numbers

export {};
