import { ControlledForm } from "./components/forms/controlled-form";
import { UncontrolledForm } from "./components/forms/uncontrolled-form";
import { SplitScreen } from "./components/layout/split-screen";

function App() {
	return (
		<SplitScreen leftWidth={1} rightWidth={1}>
			<UncontrolledForm />
			<ControlledForm />
		</SplitScreen>
	);
}

export default App;
