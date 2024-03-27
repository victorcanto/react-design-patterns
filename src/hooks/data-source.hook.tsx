import { useEffect, useState } from "react";

type GetDataFn<T> = () => Promise<T> | null;
interface Result<T> {
	data: T | null;
}

export const useDataSource = <DataType,>(
	getData: GetDataFn<DataType>
): Result<DataType> => {
	const [data, setData] = useState<DataType | null>(null);

	useEffect(() => {
		(async () => {
			const data = await getData();
			setData(data);
		})();
	}, [getData]);

	return { data };
};
