import { SplitScreen } from "./components/split-screen";

const LeftSideComponent = ({ title }: { title: string }) => {
	return <h2 style={{ backgroundColor: "red" }}>{title}</h2>;
};

const RightSideComponent = ({ title }: { title: string }) => {
	return <h2 style={{ backgroundColor: "orange" }}>{title}</h2>;
};

function App() {
	return (
		<SplitScreen leftWidth={1} rightWidth={3}>
			<LeftSideComponent title="Left" />
			<RightSideComponent title="Right" />
		</SplitScreen>
	);
}

export default App;
