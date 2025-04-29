"use strict";
// Types in TypeScript
// Types in TypeScript are used to define the shape of data. They can be used to define the structure of objects, arrays, and functions.
// Types can also be used to define the types of function parameters and return values.
//  In TypeScript, you can use the `type` keyword to define a type alias, or you can use the `interface` keyword to define an interface.
// Both can be used to define the shape of an object, but interfaces are more powerful and flexible than type aliases. In this section, we will cover the following topics:
// Types
// 1) Numbers
// 2) Strings
// 3) Booleans
// 4) Arrays
// 5) Tuples
// 6) Enums
// 7) Any TODO: Avoid using this type as much as possible- it skips type checking
// 8) Void
// 9) Null and Undefined
// 10) Never
// 11) Object
// 12) Unknown
//  etc.
let greeting = "Hello, TypeScript!";
let myNum = 19;
// greeting = 6; // Error: Type 'number' is not assignable to type 'string'.
// greeting = true; // Error: Type 'boolean' is not assignable to type 'string'.
console.log(greeting);
// greeting. // suggests methods available on string type
console.log(myNum.toExponential(2)); // suggests methods available on number type
// myNum.toUpperCase(); // Error: Property 'toUpperCase' does not exist on type 'number'.
// greeting.toUppercase(); // Error: Property 'toUppercase' does not exist on type 'string' and suggest correct Name.
