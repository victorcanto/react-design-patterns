import React from "react";

export const UncontrolledForm = () => {
	const nameInputRef = React.createRef<HTMLInputElement>();
	const ageInputRef = React.createRef<HTMLInputElement>();

	const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		console.log(nameInputRef.current?.value, ageInputRef.current?.value);
	};

	return (
		<form onSubmit={submitHandler}>
			<input type="text" name="name" placeholder="Name" ref={nameInputRef} />
			<input type="number" name="age" placeholder="Age" ref={ageInputRef} />
			<input type="submit" value={"Submit uncontrolled form"} />
		</form>
	);
};
