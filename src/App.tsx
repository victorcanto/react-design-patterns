import { useDeferredValue, useState } from "react";
import { HeavyComponent } from "./components/use-deferred-value/heavy-component";

function App() {
	const [keyword, setKeyword] = useState("");

	const deferredKeyword = useDeferredValue(keyword);

	console.log("Keyword:", keyword);
	console.log("Deferred keyword:", deferredKeyword);

	return (
		<>
			<input
				type="text"
				value={keyword}
				onChange={(e) => setKeyword(e.target.value)}
			/>
			<HeavyComponent keyword={deferredKeyword} />
		</>
	);
}

export default App;
