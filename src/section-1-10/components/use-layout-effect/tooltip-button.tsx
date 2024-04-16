import { useEffect, useLayoutEffect, useRef, useState } from "react";
import styles from "./tooltip-button.module.css";

export const TooltipButton = () => {
	const [show, setShow] = useState(false);
	const [top, setTop] = useState(0);
	const buttonRef = useRef<HTMLButtonElement>(null);

	// useEffect(() => {
	// 	if (buttonRef.current === null || !show) return setTop(0);
	// 	const { bottom } = buttonRef.current.getBoundingClientRect();
	// 	setTop(bottom + 30);
	// }, [show]);

	useLayoutEffect(() => {
		if (buttonRef.current === null || !show) return setTop(0);
		const { bottom } = buttonRef.current.getBoundingClientRect();
		setTop(bottom + 30);
	}, [show]);

	const now = performance.now();
	while (now > performance.now() - 100) {
		//Do something
	}

	return (
		<>
			<button ref={buttonRef} onClick={() => setShow((s) => !s)}>
				Show
			</button>
			{show && (
				<div
					className={styles.tooltip}
					style={{
						top: `${top}px`,
					}}
				>
					Some text ...
				</div>
			)}
		</>
	);
};
