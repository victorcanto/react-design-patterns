import { useRef } from "react";
import { InputRef } from "./components/use-imperative-handle/input-ref";

function App() {
	const inputRef = useRef<HTMLInputElement>(null);

	return (
		<>
			<InputRef type="text" ref={inputRef} />
			<button onClick={() => console.log(inputRef.current?.value)}>
				Log value
			</button>
		</>
	);
}

export default App;
