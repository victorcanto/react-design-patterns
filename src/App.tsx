import { RecursiveComponent } from "./components/recursive/recursive";
import { nestedObject } from "./data/recursive";

function App() {
	return (
		<div>
			<RecursiveComponent data={nestedObject} />
		</div>
	);
}

export default App;
