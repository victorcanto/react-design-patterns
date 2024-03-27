import { useEffect, useState } from "react";
import { User } from "../interfaces/user";
import { api } from "../http/axios/api";

export const useCurrentUser = () => {
	const [user, setUser] = useState<User | null>(null);

	useEffect(() => {
		(async () => {
			const response = await api.get("/current-user");
			setUser(response.data);
		})();
	}, []);

	return { user };
};
