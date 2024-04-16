import { useEffect, useState } from "react";
import { api } from "../http/axios/api";

interface Result<T> {
	resource: T | null;
}

export const useResource = <ResourceType,>(
	resourceUrl: string
): Result<ResourceType> => {
	const [resource, setResource] = useState<ResourceType | null>(null);

	useEffect(() => {
		(async () => {
			const response = await api.get<ResourceType>(resourceUrl);
			setResource(response.data);
		})();
	}, [resourceUrl]);

	return { resource };
};
