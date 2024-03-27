import { useEffect, useState } from "react";
import { emitter } from "../../App";

export const Counter = () => {
	const [count, setCount] = useState(0);

	useEffect(() => {
		const onIncrementCounter = () => {
			setCount((count) => count + 1);
		};

		const onDecrementCounter = () => {
			setCount((count) => count - 1);
		};

		emitter.on("increment", onIncrementCounter);
		emitter.on("decrement", onDecrementCounter);

		return () => {
			emitter.off("increment", onIncrementCounter);
			emitter.off("decrement", onDecrementCounter);
		};
	}, []);

	return <div>#: {count}</div>;
};
