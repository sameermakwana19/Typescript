interface User {
	readonly dbid: number; // read-only property
	email: string;
	userId: number;
	googleId?: string; // optional property
	// startTrail: () => string;
	startTrail(): string; // method signature -> startTrail is a method that returns a string
	getCoupon(coupan: string): number; // method signature -> getCoupon is a method that takes a string and returns a number
}

const sam: User = {
	email: "sa@sam.com",
	userId: 1,
	dbid: 1,
	startTrail: () => "trail started",
	getCoupon: (coupanName = "10% off") => {
		console.log(`Coupon code is ${coupanName}`);
		return 1;
	},
};
// sam.dbid = 2; // error: cannot assign to 'dbid' because it is a read-only property

export {};
