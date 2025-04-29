// number : TODO: ONLY NUMBER not NUMBERS

let userId: number = 1919.09;

// userId. // suggests methods available on number type

//boolean
let isLoggedIn: boolean = false;
// isLoggedIn. // suggests methods available on boolean type
console.log(isLoggedIn.valueOf()); // returns the primitive value of the boolean object.

// TYPE INFERENCE

//! overuse of type annotation
//? e.g. let userId: number = 1919.09;
//* TypeScript can infer the type of a variable based on its value. This is called type inference.
// For example,  if you assign a number to a variable, TypeScript will infer that the variable is of type number.
// You don't need to explicitly specify the type.

// * BETTER CODE
// let userId = 1919.09; // TypeScript infers that userId is of type number
// userId = "sameer"; // Error: Type 'string' is not assignable to type 'number'.
