import { UserInfoByIdWithUserHook } from "./components/users/user-info-by-id-with-user-hook";
import { UserInfoWithCurrentUserHook } from "./components/users/user-info-with-current-user-hook";
import { UserInfoWithDataSourceHook } from "./components/users/user-info-with-data-source-hook";
import { UserInfoWithResourceHook } from "./components/users/user-info-with-resource-hook";

function App() {
	return (
		<div>
			<UserInfoWithCurrentUserHook />
			<UserInfoByIdWithUserHook userId="3" />
			<UserInfoWithResourceHook userId="2" />
			<UserInfoWithDataSourceHook userId="1" />
		</div>
	);
}

export default App;
