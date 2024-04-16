import { api } from "../../http/axios/api";
import { User } from "../../interfaces/user";

export const getUserById = async (id: string) => {
	const response = await api.get<User>(`/users/${id}`);
	return response.data;
};
