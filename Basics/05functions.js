"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// defines the return //* (props):number
const add = (a, b) => {
    // define the types of the parameters and the return type of the function
    // a: number, b: number, and the return type is also number.
    // parameter types prevents us from  a.toUpperCase() and helps us avoid writing manual if checks for the types of the parameters.
    // also gives error is we pass wrong parameter as function call add ("1",2)
    return a + b;
};
add(1, 2); // Valid: a and b are numbers
// Incase of function, type inference is not good. If I don't specify the return type, TypeScript will infer the return type as void. This is not ideal because it defeats the purpose of using TypeScript, which is to have strong typing and catch errors at compile time.
// To avoid this, we can use type annotations to specify the return type explicitly. This way, TypeScript will enforce the return type and catch any errors at compile time.
// add("1", 2);
function getUpper(val) {
    return val; //no suggestion
}
function getUPPER(val) {
    return val.toUpperCase(); // gives suggestion after val.
}
getUpper(4); // no error
// getUPPER(4); // Error: Argument of type 'number' is not assignable to parameter of type 'string'.
getUPPER("4"); // no error
// Vunerable code
// function sign(name, email, password, isPaid) {
// 	//if noImpilicitAny is set to true, then it will give otherwise no error
// }
// sign(1, 1, 1, 1); //no error
// Better code
function signUpUser({ name, password, email, isPaid, }) {
    // do something
}
function signInUser({ name, password, email, isPaid }) {
    // do something
}
// Default values
const test1 = (a, b = false) => { };
// return a + b;
// b is optional and has a default value of 10
function addition(a, b) {
    // Need to handle case when b is undefined
    return a + (b || 0); // if b is undefined, return 0
    // return "hello";
}
addition(5); // Valid: b is optional
addition(5, 3); // Valid: b is provided
// will use UNINON type define return type of function which might return multiple types
function getValue(val) {
    if (typeof val === "string") {
        return val.toUpperCase(); // return type is string
    }
    else if (typeof val === "number") {
        return val.toFixed(2); // return type is number
    }
    return val; // return type is string | number
}
// const heros = [1, 2, 3]; // error with uppercase method
const heros = ["thor", "spiderman", "ironman"];
heros.map((hero) => {
    // or only (hero)=>
    // show type of hero is string
    return hero.toUpperCase(); // return type is string[]
});
//* VOID
function consoleError(val) {
    console.log(val);
}
// bad
function consoleErr(val) {
    //  function consoleErr(val: string): void -> behind the scene
    console.log(val);
}
// ! HANDLE ERROR -> NEVER AND UNKNOWN
// never -> function that never returns a value. It can be used to indicate that a function will always throw an error or will never complete its execution. This is useful for functions that are not meant to return a value, such as error handling functions or infinite loops.
function throwError(message) {
    throw new Error(message); // this function will never return a value
}
// *Bottom line :
// function -> type annotation is required for parameters and return type
//variable -> type annotation is optional for parameters and return type
