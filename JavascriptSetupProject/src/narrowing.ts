// TODO NARROWING
// Narrowing is narrow down the type of a variable to a more specific type

/*
type of 1 -> number
type of "1" -> string
type of [1,2] -> returns "Object"
typeof "" -> string
but typeof null -> object
*/

function detectType(val: number | string) {
	//! return val.toLowerCase(); // error -> because not 100% sure whether val is string or number

	// * Narrowing
	if (typeof val === "string") {
		return val.toLowerCase(); // now we are sure that val is string
	}

	return val.toFixed(2); // now we are sure that val is number
}

// suppose we have
function detectType2(val: number | string | number[]) {
	// * Narrowing
	if (typeof val === "string") {
		return val.toLowerCase(); // now we are sure that val is string
	}

	//! return val + 3; // error -> here val can be number or number[]

	//* Narrowing
	if (Array.isArray(val)) {
		return val[0]; // now we are sure that val is number[]
	}

	return val + 3;
}

// * IN operator
interface User {
	name: string;
	age: number;
}

interface Admin {
	name: string;
	age: number;
	isAdmin: boolean;
}

function isAdminAccount(account: User | Admin) {
	//* Narrowing
	if ("isAdmin" in account) {
		return account.isAdmin; // now we are sure that account is Admin
	}
	return false; // now we are sure that account is User
}

// *( TYPE PREDICATES)

type Fish = { swim(): void };
type Bird = { fly(): void };

function isFish(pet: Fish | Bird) {
	return (pet as Fish).swim !== undefined; // now we are sure that pet is Fish
}

function getFood(pet: Fish | Bird) {
	if (isFish(pet)) {
		return pet.swim(); // Error: still we are not sure that pet is Fish
	} else {
		return pet.fly(); // Error: still we are not sure that pet is Bird
	}
}

// use type predicate as return type of function

function isFish2(pet: Fish | Bird): pet is Fish {
	return (pet as Fish).swim !== undefined; // now we are sure that pet is Fish
}

function getFood2(pet: Fish | Bird) {
	if (isFish2(pet)) {
		return pet.swim(); //* NO ERROR: now we are sure that pet is Fish
	} else {
		return pet.fly(); // now we are sure that pet is Bird
	}
}

// * Discriminated Unions
interface Car {
	type: "car";
	drive(): void;
}
interface Truck {
	type: "truck";
	load(): void;
}

type Vehicle = Car | Truck;

function getTrueVehicle(machine: Vehicle) {
	if (machine.type === "car") {
		return machine.drive(); // now we are sure that machine is Car
	}
	return machine.load(); // now we are sure that machine is Truck
}

// type or kind any word we can use to define the identifier of the object
// Just a good practice to use the same name as the interface name

// * NEVER TYPE
// never type is a type that never occurs. It is used to represent the return type of a function that always throws an error or never returns a value.

function getMileage(machine: Vehicle) {
	switch (machine.type) {
		case "car":
			return machine.drive(); // now we are sure that machine is Car

		case "truck":
			return machine.load(); // now we are sure that machine is Truck

		default:
			// * here if we later add a new type to the Vehicle type, we will get an error, because we have not handled that type in the switch statement
			// * this is a good practice to use exhaustive check to make sure that we have handled all the types in the switch statement
			const _exhaustiveCheck: never = machine; // error: machine is not of type Vehicle
			throw new Error(`Unknown machine type: ${_exhaustiveCheck}`); // now we are sure that machine is never
	}
}
