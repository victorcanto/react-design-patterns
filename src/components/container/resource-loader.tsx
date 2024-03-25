import React, { useEffect, useState } from "react";
import { api } from "../../http/axios/api";

interface ResourceLoaderProps {
	resourceUrl: string;
	resourceName: string;
	children: React.ReactNode;
}

export const ResourceLoader = <ResourceType,>(props: ResourceLoaderProps) => {
	const { resourceUrl, resourceName, children } = props;
	const [resource, setResource] = useState<ResourceType | null>(null);

	useEffect(() => {
		(async () => {
			const response = await api.get<ResourceType>(resourceUrl);
			setResource(response.data);
		})();
	}, [resourceUrl]);

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
