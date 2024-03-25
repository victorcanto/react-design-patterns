interface SmallBookListItemProps {
	book: {
		name: string;
		price: number;
	};
}

export const SmallBookListItem = ({ book }: SmallBookListItemProps) => {
	const { name, price } = book;

	return (
		<h2>
			{name} - {price}
		</h2>
	);
};
