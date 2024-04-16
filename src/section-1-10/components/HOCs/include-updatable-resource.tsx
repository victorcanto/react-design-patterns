import { ComponentType, PropsWithChildren, useEffect, useState } from "react";
import { api } from "../../http/axios/api";

const toCapital = (str: string) =>
	str.charAt(0).toUpperCase().concat(str.slice(1));

export const includeUpdateResource =
	<Props, ResourceType>(
		Component: ComponentType<Props>,
		resourceUrl: string,
		resourceName: string
	) =>
	(props: PropsWithChildren<Props>): JSX.Element => {
		const [initialResource, setInitialResource] = useState<ResourceType>();
		const [resource, setResource] = useState<ResourceType>();

		useEffect(() => {
			(async () => {
				const response = await api.get(resourceUrl);
				setInitialResource(response.data);
				setResource(response.data);
			})();
		}, []);

		const onChange = (updates: ResourceType) => {
			setResource({ ...resource, ...updates });
		};

		const onPost = async () => {
			const response = await api.post(resourceUrl, {
				[resourceName]: resource,
			});
			setInitialResource(response.data);
			setResource(response.data);
		};

		const onReset = () => {
			setResource(initialResource);
		};

		const resourceProps = {
			[resourceName]: resource,
			[`initial${toCapital(resourceName)}`]: initialResource,
			[`onChange${toCapital(resourceName)}`]: onChange,
			[`onPost${toCapital(resourceName)}`]: onPost,
			[`onReset${toCapital(resourceName)}`]: onReset,
		};

		return <Component {...props} {...resourceProps} />;
	};
