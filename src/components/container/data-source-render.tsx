import React, { useEffect, useState } from "react";

interface DataSourceRenderProps<DataType> {
	render: (resource: DataType | null) => React.ReactNode;
	getData: () => Promise<DataType | null>;
}

export const DataSourceRender = <DataType,>({
	getData,
	render,
}: DataSourceRenderProps<DataType>) => {
	const [resource, setResource] = useState<DataType | null>(null);

	useEffect(() => {
		(async () => {
			const data = await getData();
			setResource(data);
		})();
	}, [getData]);

	return render(resource);
};
