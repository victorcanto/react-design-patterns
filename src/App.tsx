import { CurrentUserLoader } from "./components/users/current-user-loader";
import { UserInfo } from "./components/users/user-info";
import { UserLoader } from "./components/users/user-loader";
import { ResourceLoader } from "./components/container/resource-loader";
import { BookInfo } from "./components/books/book-info";

function App() {
	return (
		<>
			<CurrentUserLoader>
				<UserInfo />
			</CurrentUserLoader>

			<hr />

			<UserLoader userId={"3"}>
				<UserInfo />
			</UserLoader>

			<hr />

			<UserLoader userId={"2"}>
				<UserInfo />
			</UserLoader>

			<hr />

			<ResourceLoader resourceUrl={"/users/1"} resourceName={"user"}>
				<UserInfo />
			</ResourceLoader>

			<hr />

			<ResourceLoader resourceUrl={"/books/1"} resourceName={"book"}>
				<BookInfo />
			</ResourceLoader>
		</>
	);
}

export default App;
