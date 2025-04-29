const score: Array<number> = [1, 2, 3, 4, 5];

// can have multiple types but it will make definition complex
function identityOne(val: string | number): string | number {
	return val;
}

//  it will except anything and can return any thing
// e.g input can be string but output can be number
function identityTwo(val: any): any {
	return val;
}

// Generic Type works similar to any but
// it locks the input type i.e. input and output type will be same
// if we pass input as number then output will be number

function identityThree<Type>(val: Type): Type {
	return val;
}

//* BETTER WAY
// function identityThree<T>(val: T): T {
// 	return val;
// }

identityThree(true);

interface UserTest {
	name: string;
	age: number;
}

function getUserTest<T extends UserTest>(user: T): T {
	return user;
}
// or
function getUserTest2<UserTest>(user: UserTest): UserTest {
	return user;
}

function getUserTest3<T extends UserTest>(user: T): T {
	// console.log(user.length); // error, length is not a property of UserTest
	// therefore change to (user: T[]) => T[]

	return user;
}

// particular product
function getProduct<T>(products: T[]): T {
	return products[3];
}

const getProductArrow = <T>(products: T[]): T => {
	return products[3];
};

//TODO When using jsx , somepeople prefer to use the following syntax
// const getProductArrow = <T,>(products: T[]): T => {
// 	return products[3];
// };
// the comma after T is used to indicate that T is a type parameter and not a value
// this is useful when using jsx syntax, as it helps to avoid confusion with the < and > symbols used in jsx

// * Generic Constraints
// * we can use generic constraints to limit the type of the generic parameter
// * we can use extends keyword to limit the type of the generic parameter
function demo<T, U extends number>(val: T, val2: U): object {
	return { val, val2 };
}

demo("test", 1); // works fine
demo(1, 2); // works fine
demo(1, 2.5); // works fine
// demo("test", "test"); // error, string is not assignable to number

function antherFunction<T, U>(val: T, val2: U): T & U {
	// T & U means that the function will return a value that is of type T and U
	// this is useful when we want to combine two types
	return { ...val, ...val2 };
}

//  or simply return an object of type T and U
function anotherFunction2<T, U>(val: T, val2: U): object {
	return { val, val2 };
}

// extends our particular type or interface
interface Database {
	connection: string;
	email: string;
	password: string;
}

function connect<T extends Database>(db: T): T {
	return {
		...db,
		connection: db.connection,
	};
}

connect({ connection: "test", email: "test", password: "test" }); // works fine

// ! GENERIC CLASS

interface Quiz {
	question: string;
	answer: string;
}

interface Course {
	name: string;
	author: string;
	subject: string;
}

class Sellable<T> {
	public cart: T[] = [];

	addToCart(product: T) {
		this.cart.push(product);
		return this.cart;
	}
}
// this is a generic class that can be used to create a cart for any type of product
// e.g. Quiz or Course
const quizCart = new Sellable<Quiz>();
const courseCart = new Sellable<Course>();
