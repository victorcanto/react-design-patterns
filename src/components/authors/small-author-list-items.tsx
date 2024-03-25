interface SmallAuthorListItemProps {
	author: {
		name: string;
		age: number;
	};
}

export const SmallAuthorListItem = ({ author }: SmallAuthorListItemProps) => {
	const { name, age } = author;
	return (
		<p>
			Name: {name}, Age: {age}
		</p>
	);
};
