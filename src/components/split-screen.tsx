import styled from "styled-components";

const Container = styled.div`
	display: flex;
`;

const Panel = styled.div`
	flex: 1;
`;

interface SplitScreenProps {
	Left: React.ReactNode;
	Right: React.ReactNode;
}

export const SplitScreen = ({ Left, Right }: SplitScreenProps) => {
	return (
		<Container>
			<Panel>{Left}</Panel>
			<Panel>{Right}</Panel>
		</Container>
	);
};
