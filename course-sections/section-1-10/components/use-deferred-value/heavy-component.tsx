import { memo } from "react";

const Component = ({ keyword }: { keyword: string }) => {
	const init = performance.now();
	while (init > performance.now() - 100) {
		//Do something
	}
	return (
		<>
			<h2>I am a slow component</h2>
			{keyword}
		</>
	);
};

export const HeavyComponent = memo(Component);
