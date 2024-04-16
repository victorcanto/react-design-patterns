import React, { useEffect, useState } from "react";

interface DataSourceProps<DataType> {
	getData: () => Promise<DataType | null>;
	resourceName: string;
	children: React.ReactNode;
}

export const DataSource = <DataType,>(props: DataSourceProps<DataType>) => {
	const { getData, resourceName, children } = props;
	const [resource, setResource] = useState<DataType | null>(null);

	useEffect(() => {
		(async () => {
			const data = await getData();
			setResource(data);
		})();
	}, [getData]);

	return (
		<>
			{React.Children.map(children, (child) => {
				if (React.isValidElement(child)) {
					return React.cloneElement(child, {
						...child.props,
						[resourceName]: resource,
					});
				}
				return child;
			})}
		</>
	);
};
