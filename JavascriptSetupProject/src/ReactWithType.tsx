import React from "react";

const ReactWithType = () => {
	const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {};
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {};

	return (
		<div>
			ReactWithType
			<input type="text" placeholder="Enter text" onChange={handleChange} />
			<button onClick={handleClick}>Click Me</button>
		</div>
	);
};

export default ReactWithType;
