export const getDataFromLocalStorage =
	<T>(key: string) =>
	(): T => {
		const data = localStorage.getItem(key);
		return data ? JSON.parse(data) : null;
	};

export const setDataToLocalStorage = (key: string) => (data: unknown) => {
	localStorage.setItem(key, JSON.stringify(data));
};
