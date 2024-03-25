import { useState } from "react";
import styled from "styled-components";

const ModalBackground = styled.div`
	position: absolute;
	left: 0;
	top: 0;
	overflow: auto;
	background-color: #00000067;
	width: 100%;
	height: 100%;
`;

const ModalContent = styled.div`
	margin: 12% auto;
	padding: 1.5rem;
	background-color: wheat;
	width: 50%;
`;

interface ModalProps {
	children: React.ReactNode;
}
export const Modal = ({ children }: ModalProps) => {
	const [show, setShow] = useState(false);

	return (
		<>
			<button onClick={() => setShow(!show)}>Show Modal</button>
			{show ? (
				<ModalBackground onClick={() => setShow(false)}>
					<ModalContent onClick={(e) => e.stopPropagation()}>
						<button onClick={() => setShow(false)}>Hide Modal</button>
						{children}
					</ModalContent>
				</ModalBackground>
			) : null}
		</>
	);
};
