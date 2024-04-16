interface ButtonProps {
	size?: "small" | "medium" | "large";
	color?: string;
	text: string;
}

export const Button = ({ size, color, text, ...props }: ButtonProps) => {
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

export const RedButton = (props: ButtonProps) => (
	<Button {...props} color="red" />
);

export const GreenSmallButton = (props: ButtonProps) => (
	<Button {...props} color="green" size="small" />
);
