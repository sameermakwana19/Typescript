const User = {
	name: "sameer",
	email: "sameer@example.com",
	isActive: true,
};

type UserType = {
	name: string;
	isPaid?: boolean;
};

// common use case of object type is to define the shape of an object
// either they are pass to function or return from function

function createUser({ name, isPaid = false }: UserType): {
	name: string;
	tempPassword: string;
} {
	return {
		name,
		tempPassword: "temp123",
	};
}

createUser({ name: "same" });

// * READONLY -> to make the object immutable

type coordinates = {
	readonly _x: number;
	y: number;
};

function readCoordinate(point: coordinates) {
	// point._x = 20; // error: Cannot assign to 'x' because it is a read-only property.
	return point._x + point.y;
}

const myUser: Readonly<UserType> = {
	name: "sameer",
	isPaid: true,
};

let myUser2: UserType = {
	name: "abcd",
};

// myUser.name = "sameer"; // error: Cannot assign to 'name' because it is a read-only property.
