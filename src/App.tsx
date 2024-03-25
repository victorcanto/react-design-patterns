import { CurrentUserLoader } from "./components/users/current-user-loader";
import { UserInfo } from "./components/users/user-info";
import { UserLoader } from "./components/users/user-loader";

function App() {
	return (
		<>
			<UserLoader userId={"3"}>
				<UserInfo />
			</UserLoader>

			<CurrentUserLoader>
				<UserInfo />
			</CurrentUserLoader>

			<UserLoader userId={"1"}>
				<UserInfo />
			</UserLoader>
		</>
	);
}

export default App;
