import { useEffect, useState } from "react";
import { api } from "../../http/axios/api";
import { GenericHOC } from "./types";
import { User } from "../../interfaces/user";

interface UpdatableUserProps {
	user?: User;
	initialUser?: User;
	onChangeUser?: (updates: Partial<User>) => void;
	onPostUser?: () => void;
	onResetUser?: () => void;
}

export const includeUpdatableUser: GenericHOC<UpdatableUserProps, string> =
	(Component, userId) => (props) => {
		const [initialUser, setInitialUser] = useState<User>({} as User);
		const [user, setUser] = useState<User>({} as User);

		useEffect(() => {
			(async () => {
				const response = await api.get(`/users/${userId}`);
				setInitialUser(response.data);
				setUser(response.data);
			})();
		}, []);

		const onChangeUser = (updates: Partial<User>) => {
			setUser({ ...user, ...updates });
		};

		const onPostUser = async () => {
			const response = await api.post(`/users/${userId}`, { user });
			setInitialUser(response.data);
			setUser(response.data);
		};

		const onResetUser = () => {
			setUser(initialUser);
		};

		return (
			<Component
				{...props}
				user={user}
				initialUser={initialUser}
				onChangeUser={onChangeUser}
				onPostUser={onPostUser}
				onResetUser={onResetUser}
			/>
		);
	};
