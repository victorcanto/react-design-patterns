import { Ref, forwardRef, useImperativeHandle, useState } from "react";

const Input = (
	props: JSX.IntrinsicElements["input"],
	ref: Ref<HTMLInputElement>
) => {
	const [value, setValue] = useState("");

	useImperativeHandle(
		ref,
		() => {
			return {
				value,
			} as HTMLInputElement;
		},
		[value]
	);

	return (
		<input
			{...props}
			type="text"
			value={value}
			onChange={(e) => setValue(e.target.value)}
		/>
	);
};

export const InputRef = forwardRef(Input);
