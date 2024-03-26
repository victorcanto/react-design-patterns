import styled from "styled-components";

const ControlledModalBackground = styled.div`
	position: absolute;
	left: 0;
	top: 0;
	overflow: auto;
	background-color: #00000067;
	width: 100%;
	height: 100%;
`;

const ControlledModalContent = styled.div`
	margin: 12% auto;
	padding: 1.5rem;
	background-color: wheat;
	width: 50%;
`;

interface ControlledModalProps {
	shouldDisplay: boolean;
	onClose: () => void;
	children: React.ReactNode;
}
export const ControlledModal = (props: ControlledModalProps) => {
	const { shouldDisplay, onClose, children } = props;

	return (
		<>
			{shouldDisplay ? (
				<ControlledModalBackground onClick={onClose}>
					<ControlledModalContent onClick={(e) => e.stopPropagation()}>
						<button onClick={onClose}>Hide ControlledModal</button>
						{children}
					</ControlledModalContent>
				</ControlledModalBackground>
			) : null}
		</>
	);
};
