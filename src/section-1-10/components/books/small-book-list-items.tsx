import { Book } from "../../interfaces/book";

interface SmallBookListItemProps {
	book: Pick<Book, "name" | "price">;
}

export const SmallBookListItem = ({ book }: SmallBookListItemProps) => {
	const { name, price } = book;

	return (
		<h2>
			{name} - {price}
		</h2>
	);
};
