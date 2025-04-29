interface User {
	readonly dbid: number; // read-only property
	email: string;
	userId: number;
	googleId?: string; // optional property
	// startTrail: () => string;
	startTrail(): string; // method signature -> startTrail is a method that returns a string
	getCoupon(coupan: string): number; // method signature -> getCoupon is a method that takes a string and returns a number
}

// Reopening of interfaces
// * add new properties to existing interfaces -> useful when we import an interface from a library and we want to add new properties to it
interface User {
	githubId: string; // new property added
}

let sam: User = {
	email: "s@s.com",
	userId: 1,
	dbid: 1,
	startTrail: () => "trail started",
	getCoupon: (coupanName = "10% off") => {
		console.log(`Coupon code is ${coupanName}`);
		return 1;
	},
	githubId: "sam123", // also required
};

// Inheritance in interfaces
interface Admin extends User {
	role: "admin" | "user"; // new property added
}

/*
interface Admin extends User,Employee { // multiple inheritance
  role: "admin" | "user"; // new property added
}*/

let samAdmin: Admin = {
	email: "s@s.com",
	userId: 1,
	dbid: 1,
	startTrail: () => "trail started",
	getCoupon: (coupanName = "10% off") => {
		console.log(`Coupon code is ${coupanName}`);
		return 1;
	},
	githubId: "sam123", // also required

	role: "admin", //! also required
};



// ! Types can't be reopened or changed  after they are created

// * Difference between interface and type
// 1. Interface can be reopened and changed after they are created, but types can't be reopened or changed after they are created
// 2. Interface can be used to create a new interface by extending an existing interface, but types can't be used to create a new type by extending an existing type


export {};
