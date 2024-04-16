import { ComponentType, PropsWithChildren } from "react";

export type HOC = <Props, ArgsType = unknown>(
	Component: ComponentType<Props>,
	...theArgs: ArgsType[]
) => (props: PropsWithChildren<Props>) => JSX.Element;

export type GenericHOC<Props, ArgsType = unknown> = (
	Component: ComponentType<Props>,
	...theArgs: ArgsType[]
) => (props: PropsWithChildren<Props>) => JSX.Element;
