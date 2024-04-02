import { useRef } from "react";
import { InputRef } from "./components/refs/input-ref";

function App() {
	const inputRef = useRef<HTMLInputElement>(null);

	const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		console.log(inputRef.current?.value);
	};

	return (
		<form onSubmit={submitHandler}>
			<InputRef ref={inputRef} />
			<button type="submit">Submit</button>
		</form>
	);
}

export default App;
