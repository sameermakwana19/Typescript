"use strict";
//  UNION -> either of the type
// syntax: type1 | type2 | type3
// let value: string | number | boolean; // value can be a string, number or boolean
// use union type when you want to allow a variable to hold multiple types of values instead of any
Object.defineProperty(exports, "__esModule", { value: true });
let Sameer;
function getDBUser(id) {
    // const userId = id.toLowerCase(); // error: string | number-> can't call toLowerCase on number
    //* compelled type narrowing
    if (typeof id === "string") {
        const userId = id.toLowerCase(); // ok: string
    }
    if (typeof id === "number") {
        const userId = id.toFixed(); // ok: number
    }
    return { name: "Sameer", id: 1 }; // return type is User | Admin
}
