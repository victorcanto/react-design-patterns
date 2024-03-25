interface LargeBookListItemProps {
	book: {
		name: string;
		pages: number;
		title: string;
		price: number;
	};
}

export const LargeBookListItem = ({ book }: LargeBookListItemProps) => {
	const { name, pages, title, price } = book;
	return (
		<>
			<h2>{name}</h2>
			<p>{price}</p>
			<h2>Title:</h2>
			<p>{title}</p>
			<p># of Pages: {pages}</p>
		</>
	);
};
