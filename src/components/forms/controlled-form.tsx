import { useEffect, useState } from "react";

export const ControlledForm = () => {
	const [error, setError] = useState("");
	const [name, setName] = useState("");
	const [age, setAge] = useState("");

	useEffect(() => {
		if (name.length < 1) {
			setError("Name cannot be empty");
		} else {
			setError("");
		}
	}, [name]);

	return (
		<form>
			<input
				type="text"
				name="name"
				placeholder="Name"
				value={name}
				onChange={(e) => setName(e.target.value)}
			/>
			{error && <p>{error}</p>}
			<input
				type="number"
				name="age"
				placeholder="Age"
				value={age}
				onChange={(e) => setAge(e.target.value)}
			/>
			<button type="submit">Submit controlled form</button>
		</form>
	);
};
