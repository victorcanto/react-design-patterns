import { useState } from "react";
import styled from "styled-components";

const UncontrolledModalBackground = styled.div`
	position: absolute;
	left: 0;
	top: 0;
	overflow: auto;
	background-color: #00000067;
	width: 100%;
	height: 100%;
`;

const UncontrolledModalContent = styled.div`
	margin: 12% auto;
	padding: 1.5rem;
	background-color: wheat;
	width: 50%;
`;

interface UncontrolledModalProps {
	children: React.ReactNode;
}
export const UncontrolledModal = ({ children }: UncontrolledModalProps) => {
	const [show, setShow] = useState(false);

	return (
		<>
			<button onClick={() => setShow(!show)}>Show UncontrolledModal</button>
			{show ? (
				<UncontrolledModalBackground onClick={() => setShow(false)}>
					<UncontrolledModalContent onClick={(e) => e.stopPropagation()}>
						<button onClick={() => setShow(false)}>
							Hide UncontrolledModal
						</button>
						{children}
					</UncontrolledModalContent>
				</UncontrolledModalBackground>
			) : null}
		</>
	);
};
