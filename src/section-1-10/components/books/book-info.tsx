import { Book } from "../../interfaces/book";

interface BookInfoProps {
	book?: Book | null;
}

export const BookInfo = ({ book }: BookInfoProps) => {
	const { name, pages, title, price } = book || {};

	return book ? (
		<>
			<h3>{name}</h3>
			<p>{price}</p>
			<h3>Title: {title}</h3>
			<p>Number of Pages: {pages}</p>
		</>
	) : (
		<h1>Loading</h1>
	);
};
