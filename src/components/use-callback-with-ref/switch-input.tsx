import { useCallback, useRef, useState } from "react";

export const SwitchInput = () => {
	const [showInput, setShowInput] = useState(false);
	const realInputRef = useRef<HTMLInputElement | null>(null);

	const inputRef = useCallback((input: HTMLInputElement | null) => {
		realInputRef.current = input;
		if (input === null) return;
		input.focus();
	}, []);

	return (
		<>
			<button onClick={() => setShowInput((s) => !s)}>Switch</button>
			{showInput && <input ref={inputRef} />}
		</>
	);
};
