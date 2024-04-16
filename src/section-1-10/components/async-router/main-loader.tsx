import { defer } from "react-router-dom";
import delay from "./delay";

export function loader() {
  return defer({ promise: delay("Fetched Data", 1000) });
}
