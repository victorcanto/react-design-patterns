import { useEffect, useState } from "react";
import { User } from "../interfaces/user";
import { api } from "../http/axios/api";

export const useUser = (userId: string) => {
	const [user, setUser] = useState<User | null>(null);

	useEffect(() => {
		(async () => {
			const response = await api.get(`/users/${userId}`);
			setUser(response.data);
		})();
	}, [userId]);

	return { user };
};
