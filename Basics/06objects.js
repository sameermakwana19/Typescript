"use strict";
const User = {
    name: "sameer",
    email: "sameer@example.com",
    isActive: true,
};
// common use case of object type is to define the shape of an object
// either they are pass to function or return from function
function createUser({ name, isPaid = false }) {
    return {
        name,
        tempPassword: "temp123",
    };
}
createUser({ name: "same" });
function readCoordinate(point) {
    // point._x = 20; // error: Cannot assign to 'x' because it is a read-only property.
    return point._x + point.y;
}
const myUser = {
    name: "sameer",
    isPaid: true,
};
let myUser2 = {
    name: "abcd",
};
// myUser.name = "sameer"; // error: Cannot assign to 'name' because it is a read-only property.
