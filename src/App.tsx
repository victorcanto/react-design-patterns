import { ChildDemo } from "./components/error-boundaries/child-demo";
import { ErrorBoundary } from "./components/error-boundaries/error-boundary";

function App() {
	return (
		<div>
			<h1>Parent Component</h1>
			<ErrorBoundary fallback={<h1>Error at Child Level</h1>}>
				<ChildDemo />
			</ErrorBoundary>
		</div>
	);
}

export default App;
