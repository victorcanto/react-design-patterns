import styled from "styled-components";

const Container = styled.div`
	display: flex;
`;

interface PanelProps {
	flex: number;
}

const Panel = styled.div<PanelProps>`
	flex: ${(props) => props.flex};
`;

interface SplitScreenProps {
	children: React.ReactNode[];
	leftWidth?: number;
	rightWidth?: number;
}

export const SplitScreen = (props: SplitScreenProps) => {
	const { children, leftWidth = 1, rightWidth = 1 } = props;
	const [Left, Right] = children;

	return (
		<Container>
			<Panel flex={leftWidth}>{Left}</Panel>
			<Panel flex={rightWidth}>{Right}</Panel>
		</Container>
	);
};
