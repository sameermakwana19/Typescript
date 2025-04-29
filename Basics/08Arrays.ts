let numbers: number[] = [1, 2, 3, 4, 5]; // array of numbers
let numbers2: Array<number> = [1, 2, 3, 4, 5]; // array of numbers

numbers.push(1); // number -> valid
// numbers.push("1"); // string -> error: Argument of type 'string' is not assignable to parameter of type 'number'.

let superHeros = []; // array of type any

superHeros.push("spiderman"); // string
superHeros.push(1); // number

let numOrString: (number | string)[] = []; // array of type number or string -> [1, "1", 2, "2"] -> valid
numOrString.push(1); // number
numOrString.push("1"); // string

// ! let numOrString : string[] | number[] =[] -> will only accept either of the type , not mixture
// ! [1, "1", 2, "2"] -> invalid

// we can have the array of objects or custom objects
type User = {
	name: string;
	age: number;
};

// let users: Array<User> = [];
let users: User[] = []; // array of type User
users.push({ name: "sameer", age: 23 }); // valid
users.push();

let MLModelsImage: number[][] = []; // 2D array of numbers

// let ids: ReadonlyArray<number> = [1, 2, 3, 4]; // readonly array of numbers
let ids: readonly number[] = [1, 2, 3, 4]; // readonly array of numbers
// ids.push(1); // error: Property 'push' does not exist on type 'readonly number[]'.
