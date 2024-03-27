const isObject = <T,>(data: T): boolean =>
	typeof data === "object" && data !== null;

interface RecursiveComponentProps {
	data: object;
}

export const RecursiveComponent = ({ data }: RecursiveComponentProps) => {
	if (!isObject(data)) {
		return <li>{data.toString()}</li>;
	}

	const pairs = Object.entries(data);

	return (
		<>
			{pairs.map(([key, value]) => (
				<li key={key}>
					{key}
					<ul>
						<RecursiveComponent data={value} />
					</ul>
				</li>
			))}
		</>
	);
};
