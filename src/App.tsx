import { GreenSmallButton } from "./components/functional-programming/composition";
import { RedSmallButton } from "./components/functional-programming/partial";

function App() {
	return (
		<div>
			<RedSmallButton text="I am RedSmallButton!" />
			<GreenSmallButton text="I am small and green!" />
		</div>
	);
}

export default App;
