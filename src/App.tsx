import { useState } from "react";
import { Alert } from "./components/portals/alert";

function App() {
	const [show, setShow] = useState(false);

	return (
		<div style={{ position: "absolute", marginTop: "200px" }}>
			<h1>Other Content</h1>
			<button onClick={() => setShow(true)}>Show message</button>
			<Alert show={show} onClose={() => setShow(false)}>
				<p>A sample message to show.</p>
				<br />
				Click it to close
			</Alert>
		</div>
	);
}

export default App;
