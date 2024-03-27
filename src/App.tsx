import mitt from "mitt";
import { ParentComponent } from "./components/observer-pattern/parent";

export const emitter = mitt();

function App() {
	return <ParentComponent />;
}

export default App;
