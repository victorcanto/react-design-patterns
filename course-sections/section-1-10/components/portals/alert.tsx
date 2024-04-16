import { createPortal } from "react-dom";
import styled from "styled-components";

interface AlertProps {
	children: React.ReactNode;
	onClose: () => void;
	show: boolean;
}

const Container = styled.div`
	background-color: grey;
	border-radius: 1rem;
	padding: 1rem;
	color: black;
	width: fit-content;
	margin: 0 auto;
`;

export const Alert = (props: AlertProps) => {
	const { children, onClose, show } = props;

	if (!show) {
		return null;
	}

	return createPortal(
		<Container onClick={onClose}>{children}</Container>,
		document.getElementById("alert-holder")!
	);
};
