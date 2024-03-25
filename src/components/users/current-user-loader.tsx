import React, { useEffect, useState } from "react";
import { User } from "../../interfaces/user";
import { api } from "../../http/axios/api";

interface CurrentUserLoaderProps {
	children: React.ReactNode;
}

export const CurrentUserLoader = ({ children }: CurrentUserLoaderProps) => {
	const [user, setUser] = useState<User | null>(null);

	useEffect(() => {
		(async () => {
			const response = await api.get<User>("/current-user");
			setUser(response.data);
		})();
	}, []);

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
