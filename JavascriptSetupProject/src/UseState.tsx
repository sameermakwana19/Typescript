import React, { useState } from "react";

interface User {
	name: string;
	age: number;
}

const UseState = () => {
	const [name, setName] = useState<string>("");

	// const [user, setUser] = useState(null); --> gives error when we try to set user to an object or try to access user.name or user.age
	// *Better way
	const [user, setUser] = useState<User | null>(null);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setName(e.target.value);
		// user. -->shows only name and age properties
	};

	const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
		alert(`Hello ${name}`);
		setUser({
			name: name,
			age: 25,
		});
	};

	return (
		<div>
			UseState
			<input type="text" placeholder="Enter name" onChange={handleChange} />
			<button onClick={handleClick}>Click Me</button>
			{/* {user.age}  */} {/* gives error because user is null */}
			{user ? user.name : "No user"} {/* gives no error */}
		</div>
	);
};

export default UseState;
