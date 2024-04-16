import { useEffect, useState } from "react";

export const ControlledForm = () => {
	const [error, setError] = useState("");
	const [name, setName] = useState("");
	const [age, setAge] = useState("");
	const [isSubmitted, setIsSubmitted] = useState(false);

	useEffect(() => {
		if (isSubmitted && name.length < 3) {
			setError("Name cannot be a digit");
		} else {
			setError("");
		}
	}, [isSubmitted, name]);

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		setIsSubmitted(true);
	};

	return (
		<form onSubmit={handleSubmit}>
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
