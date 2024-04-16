import { api } from "../../http/axios/api";
import { Book } from "../../interfaces/book";

export const getBooksById = async (id: string) => {
	const response = await api.get<Book>(`/books/${id}`);
	return response.data;
};
