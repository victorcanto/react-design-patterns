import { useEffect, useState } from "react";
import { HOC } from "./types";
import { api } from "../../http/axios/api";

export const includeUser: HOC = (Component, userId) => (props) => {
	const [user, setUser] = useState(null);

	useEffect(() => {
		(async () => {
			const response = await api.get(`/users/${userId}`);
			setUser(response.data);
		})();
	}, []);

	return <Component {...props}  user={user} />;
};
