"use strict";
//! any
// example
let hero;
function getHero() {
    return "thor";
}
hero = getHero(); // hero is of type any
// Here the automatic type inference is not good enough. The type of hero is any, which means it can be anything. This is not ideal because it defeats the purpose of using TypeScript, which is to have strong typing and catch errors at compile time.
// To avoid this, we can use type annotations to specify the type of hero explicitly. This way, TypeScript will enforce the type and catch any errors at compile time.
let sum;
function add(a, b) {
    return a + b;
    // return "ture"; //! Error: Type 'string' is not assignable to type 'number'.
}
sum = add(1, 2); // sum is of type number
// sum = add("1", 2); // Error: Argument of type 'string' is not assignable to parameter of type 'number'.
// * Typescript also have a special type any. that you can use whenever you don'r want a particular value to cause typechecking errors.
// Basically turn of the type checking
// TODO Avoid using this type as much as possible- it skips type checking
// Use noImplicitAny compiler option to flag any implicit any as an error.
