import { useState } from "react";

import { Counter } from "./components/counter";

function App() {
	const [changeShirts, setChangeShirts] = useState(false);
	return (
		<div>
			<div>
				<span>{changeShirts ? "Shirts" : "Shoes"} counts:</span>
				<Counter key={changeShirts ? "shirts" : "shoes"} />
			</div>

			<br />

			<input type="number" key={changeShirts ? "shirts" : "shoes"} />

			<br />

			<button onClick={() => setChangeShirts((s) => !s)}>Switch</button>
		</div>
	);
}

export default App;
