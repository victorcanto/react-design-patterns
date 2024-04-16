import React, { useState } from "react";

interface UncontrolledFlowProps {
	children: React.ReactNode;
	onDone: (data: object) => void;
}

export const UncontrolledFlow = ({
	children,
	onDone,
}: UncontrolledFlowProps) => {
	const [data, setData] = useState({});
	const [currentStepIndex, setCurrentStepIndex] = useState(0);

	const goNext = (dataFromStep: unknown[]) => {
		const nextStepIndex = currentStepIndex + 1;

		const newData = {
			...data,
			...dataFromStep,
		};

		console.log(newData);

		if (nextStepIndex < React.Children.toArray(children).length) {
			setCurrentStepIndex(nextStepIndex);
		} else {
			onDone(newData);
		}

		setData(newData);
	};

	const currentChild = React.Children.toArray(children)[currentStepIndex];

	if (React.isValidElement(currentChild)) {
		return React.cloneElement(currentChild, { ...currentChild.props, goNext });
	}

	return currentChild;
};
