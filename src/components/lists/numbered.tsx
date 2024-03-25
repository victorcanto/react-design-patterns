import React from "react";

interface NumberedListProps<T> {
	items: T[];
	sourceName: string;
	ItemComponent: React.ElementType;
}

export const NumberedList = <T extends { name: string }>(
	props: NumberedListProps<T>
) => {
	const { items, sourceName, ItemComponent } = props;

	if (!items) {
		return null;
	}

	return (
		<>
			{items.map((item, i) => (
				<>
					<h3>{i + 1}</h3>
					<ItemComponent
						key={item.name.concat("-", i.toString())}
						{...{ [sourceName]: item }}
					/>
				</>
			))}
		</>
	);
};
