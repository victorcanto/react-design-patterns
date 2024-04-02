import { LegacyRef, forwardRef } from "react";

const Input = (
	props: JSX.IntrinsicElements["input"],
	ref: LegacyRef<HTMLInputElement>
) => {
	return <input type="text" ref={ref} {...props} />;
};

export const InputRef = forwardRef(Input);
