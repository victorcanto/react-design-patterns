import { User } from "../../interfaces/user";

export interface UserInfoProps {
	user?: User | null;
}

export const UserInfo = ({ user }: UserInfoProps) => {
	const { name, age, country, books } = user || {};

	return user ? (
		<>
			<h2>{name}</h2>
			<p>Age: {age} years</p>
			<p>Country: {country}</p>
			<h2>Books</h2>
			<ul>
				{books?.map((book) => (
					<li key={book}> {book} </li>
				))}
			</ul>
		</>
	) : (
		<h1>Loading...</h1>
	);
};
