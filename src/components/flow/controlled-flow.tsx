import React from "react";

interface ControlledFlowProps {
	children: React.ReactNode;
	onDone: (data: object) => void;
	currentIndex: number;
	onNext: (dataFromStep: object) => void;
}

export const ControlledFlow = (props: ControlledFlowProps) => {
	const { children, onDone, currentIndex, onNext } = props;

	const goNext = (dataFromStep: object) => {
		onNext(dataFromStep);

		if (currentIndex + 1 === React.Children.toArray(children).length) {
			onDone(dataFromStep);
		}
	};

	const currentChild = React.Children.toArray(children)[currentIndex];

	if (React.isValidElement(currentChild)) {
		return React.cloneElement(currentChild, { ...currentChild.props, goNext });
	}

	return currentChild;
};
