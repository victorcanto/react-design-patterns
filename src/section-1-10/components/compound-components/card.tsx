import { PropsWithChildren, createContext, useContext, useMemo } from "react";

interface ContextType {
	test: string;
}

const Context = createContext({} as ContextType);

const Body = ({ children }: PropsWithChildren) => {
	return <div style={{ padding: ".5rem" }}>{children}</div>;
};

const Header = ({ children }: PropsWithChildren) => {
	const { test } = useContext(Context);
	return (
		<div
			style={{
				borderBottom: "1px solid black",
				padding: ".5rem",
				marginBottom: ".5rem",
			}}
		>
			{children}
			{test}
		</div>
	);
};
const Footer = ({ children }: PropsWithChildren) => {
	return (
		<div
			style={{
				borderTop: "1px solid black",
				padding: ".5rem",
				marginTop: ".5rem",
			}}
		>
			{children}
		</div>
	);
};

interface CardProps extends ContextType {}

const Card = ({ test, children }: PropsWithChildren<CardProps>) => {
	const memoizedValue = useMemo(() => ({ test }), [test]);

	return (
		<Context.Provider value={memoizedValue}>
			<div style={{ border: "1px solid black" }}>{children}</div>
		</Context.Provider>
	);
};

export default Card;

Card.Header = Header;
Card.Body = Body;
Card.Footer = Footer;
