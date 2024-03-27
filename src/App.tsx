import { includeUser } from "./components/HOCs/include-user";
import { logProps } from "./components/HOCs/log-props";
import { UserInfoForm } from "./components/forms/user-info-form";
import { UserInfo } from "./components/users/user-info";

const UserInfoWrapper = logProps(UserInfo);
const UserInfoLoader = includeUser(UserInfo, "2");

function App() {
	return (
		<div>
			<UserInfoForm />
			<UserInfoLoader />
			<UserInfoWrapper
				user={{
					id: "1",
					name: "Victor Canto",
					age: 24,
					country: "Brazil",
					books: [
						"Implementando Domain-Driven Design",
						"Arquitectura Limpa",
						"Codigo Limpo",
						"Eloquente Javascript",
					],
				}}
			/>
		</div>
	);
}

export default App;
