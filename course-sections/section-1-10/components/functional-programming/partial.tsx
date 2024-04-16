import { ComponentProps, ComponentType } from "react";

export const PartialComponent = <T extends object, P extends object>(
	Component: ComponentType<T>,
	partialProps: P & ComponentProps<ComponentType<T>>
) => {
	return (props: ComponentProps<ComponentType<T>>) => {
		return <Component {...partialProps} {...props} />;
	};
};

interface ButtonProps {
	size?: "small" | "medium" | "large";
	color?: string;
	text?: string;
}

const Button = ({ size, color, text, ...props }: ButtonProps) => {
	return (
		<button
			{...props}
			style={{
				fontSize: size === "small" ? "8px" : "32px",
				backgroundColor: color,
			}}
		>
			{text}
		</button>
	);
};

export const RedButton = PartialComponent(Button, { color: "red" });
export const RedSmallButton = PartialComponent(RedButton, { size: "small" });
