import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ErrorBoundary } from "./components/error-boundaries/error-boundary.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<ErrorBoundary fallback={<h1>Error at App Level</h1>}>
			<App />
		</ErrorBoundary>
	</React.StrictMode>
);
