import { useState } from "react";
import { ControlledForm } from "./components/forms/controlled-form";
import { UncontrolledForm } from "./components/forms/uncontrolled-form";
import { ControlledModal } from "./components/layout/modals/controlled-modal";
import { UncontrolledModal } from "./components/layout/modals/uncontrolled-modal";
import { SplitScreen } from "./components/layout/split-screen";

function App() {
	const [shouldDisplay, setShouldDisplay] = useState(false);
	return (
		<SplitScreen leftWidth={1} rightWidth={1}>
			<UncontrolledModal>
				<UncontrolledForm />
			</UncontrolledModal>
			<div>
				<ControlledModal
					shouldDisplay={shouldDisplay}
					onClose={() => setShouldDisplay(false)}
				>
					<ControlledForm />
				</ControlledModal>
				<button onClick={() => setShouldDisplay(!shouldDisplay)}>
					{shouldDisplay ? "Hide ControlledModal" : "Show ControlledModal"}
				</button>
			</div>
		</SplitScreen>
	);
}

export default App;
