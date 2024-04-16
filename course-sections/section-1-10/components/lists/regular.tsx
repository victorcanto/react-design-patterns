import React from "react";

interface RegularListProps<T> {
	items: T[];
	sourceName: string;
	ItemComponent: React.ElementType;
}

export const RegularList = <T extends { name: string }>(
	props: RegularListProps<T>
) => {
	const { items, sourceName, ItemComponent } = props;

	if (!items) {
		return null;
	}

	return (
		<>
			{items.map((item, i) => (
				<ItemComponent
					key={item.name.concat("-", i.toString())}
					{...{ [sourceName]: item }}
				/>
			))}
		</>
	);
};
