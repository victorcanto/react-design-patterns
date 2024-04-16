import React, { useEffect, useState } from "react";
import { User } from "../../interfaces/user";
import { api } from "../../http/axios/api";

interface UserLoaderProps {
	userId: string;
	children: React.ReactNode;
}

export const UserLoader = ({ userId, children }: UserLoaderProps) => {
	const [user, setUser] = useState<User | null>(null);

	useEffect(() => {
		(async () => {
			const response = await api.get<User>(`/users/${userId}`);
			setUser(response.data);
		})();
	}, [userId]);

	return (
		<>
			{React.Children.map(children, (child) => {
				if (React.isValidElement(child)) {
					return React.cloneElement(child, { ...child.props, user });
				}
				return child;
			})}
		</>
	);
};
