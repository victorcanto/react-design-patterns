import { useId, useState } from "react";

export const Form = () => {
	const [email, setEmail] = useState("");
	const [name, setName] = useState("");

	const id = useId();

	return (
		<form>
			<div>
				<label htmlFor={`${id}-email`}>Email</label>
				<input
					type="text"
					name="email"
					id={`${id}-email`}
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>
			</div>
			<br />
			<div>
				<label htmlFor={`${id}-name`}>Name</label>
				<input
					type="text"
					name="name"
					id={`${id}-name`}
					value={name}
					onChange={(e) => setName(e.target.value)}
				/>
			</div>
		</form>
	);
};
