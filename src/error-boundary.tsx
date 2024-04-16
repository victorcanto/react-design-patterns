import React from "react";

export class ErrorBoundary extends React.Component<
	React.PropsWithChildren<{ fallback: React.ReactNode }>,
	{ hasError: boolean }
> {
	constructor(props: React.PropsWithChildren<{ fallback: React.ReactNode }>) {
		super(props);
		this.state = { hasError: false };
	}

	static getDerivedStateFromError() {
		return { hasError: true };
	}

	componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
		console.error("Error boundary:", error, errorInfo);
	}

	render() {
		if (this.state.hasError) {
			// You can render any custom fallback UI
			return this.props.fallback;
		}

		return this.props.children;
	}
}
