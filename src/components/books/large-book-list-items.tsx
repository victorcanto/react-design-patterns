import { Book } from "../../interfaces/book";

interface LargeBookListItemProps {
	book: Book;
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
