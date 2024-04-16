import { User } from "../../interfaces/user";
import { includeUpdateResource } from "../HOCs/include-updatable-resource";

interface UserInfoFormProps {
	user?: User;
	initialUser?: User;
	onChangeUser?: (updates: Partial<User>) => void;
	onPostUser?: () => void;
	onResetUser?: () => void;
}

export const UserInfoForm = includeUpdateResource<UserInfoFormProps, User>(
	({ user, onChangeUser, onPostUser, onResetUser }) => {
		return user ? (
			<>
				<label htmlFor="name">Name:</label>
				<input
					id="name"
					type="text"
					value={user.name}
					onChange={(e) => onChangeUser?.({ name: e.target.value })}
				/>

				<label htmlFor="age">Age:</label>
				<input
					id="age"
					type="number"
					value={user.age}
					onChange={(e) => onChangeUser?.({ age: Number(e.target.value) })}
				/>

				<button onClick={onResetUser}>Reset</button>
				<button onClick={onPostUser}>Save</button>
			</>
		) : (
			<h3>Loading</h3>
		);
	},
	"/users/3",
	"user"
);
