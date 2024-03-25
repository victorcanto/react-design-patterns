import { Author } from "../../interfaces/author";

interface SmallAuthorListItemProps {
	author: Pick<Author, "name" | "age">;
}

export const SmallAuthorListItem = ({ author }: SmallAuthorListItemProps) => {
	const { name, age } = author;
	return (
		<p>
			Name: {name}, Age: {age}
		</p>
	);
};
