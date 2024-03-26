import { useState } from "react";
import { UncontrolledFlow } from "./components/flow/uncontrolled-flow";
import { SplitScreen } from "./components/layout/split-screen";
import { ControlledFlow } from "./components/flow/controlled-flow";

interface UserGoNext {
	name?: string;
	age?: number;
	country?: string;
}
interface GoNext {
	goNext?: (data: UserGoNext) => void;
}

const StepOne = ({ goNext }: GoNext) => {
	return (
		<>
			<h1>Step #1: Enter your name:</h1>
			<button onClick={() => goNext?.({ name: "Victor" })}>Next</button>
		</>
	);
};
const StepTwo = ({ goNext }: GoNext) => {
	return (
		<>
			<h1>Step #2: Enter your age:</h1>
			<button onClick={() => goNext?.({ age: 24 })}>Next</button>
		</>
	);
};
const StepThree = ({ goNext }: GoNext) => {
	return (
		<>
			<h1>Step #3: Enter your country:</h1>
			<button onClick={() => goNext?.({ country: "Brazil" })}>Next</button>
		</>
	);
};

const StepCongradulations = ({ goNext }: GoNext) => {
	return (
		<>
			<h1>Congradulations! You qualify for the gitft!</h1>
			<button onClick={() => goNext?.({ country: "Brazil" })}>Next</button>
		</>
	);
};

function App() {
	const [data, setData] = useState({} as UserGoNext);
	const [currentStepIndex, setCurrentStepIndex] = useState(0);

	const goNext = (dataFromStep: UserGoNext) => {
		setData({ ...data, ...dataFromStep });
		setCurrentStepIndex(currentStepIndex + 1);
	};

	return (
		<div>
			<SplitScreen>
				<UncontrolledFlow
					onDone={(result) => {
						alert(
							"Yah, you made it to the final step!\n Data: " +
								JSON.stringify(result)
						);
					}}
				>
					<StepOne />
					<StepTwo />
					<StepThree />
				</UncontrolledFlow>

				<ControlledFlow
					onDone={(result) => {
						alert(
							"Yah, you made it to the final step!\n Data: " +
								JSON.stringify({ ...data, ...result })
						);
					}}
					currentIndex={currentStepIndex}
					onNext={goNext}
				>
					<StepOne />
					<StepTwo />
					{typeof data.age === "number" && data.age > 23 ? (
						<StepCongradulations />
					) : (
						<StepThree />
					)}
				</ControlledFlow>
			</SplitScreen>
		</div>
	);
}

export default App;
