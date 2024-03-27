import { HOC } from "./types";

export const logProps: HOC = (Component) => (props) => {
	console.log(props);
	return <Component {...props} />;
};
