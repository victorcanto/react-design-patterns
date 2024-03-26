import { CurrentUserLoader } from "./components/users/current-user-loader";
import { UserInfo } from "./components/users/user-info";
import { UserLoader } from "./components/users/user-loader";
import { ResourceLoader } from "./components/container/resource-loader";
import { BookInfo } from "./components/books/book-info";
import { DataSource } from "./components/container/data-source";
import * as actions from "./actions";
import { DataSourceRender } from "./components/container/data-source-render";
import { getDataFromLocalStorage, setDataToLocalStorage } from "./storage";
import { books } from "./data/books";
import { Book } from "./interfaces/book";

const setDataInBook = setDataToLocalStorage("book");
setDataInBook(books[1]);
const setDataInBooks = setDataToLocalStorage("books");
setDataInBooks(books);

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

			<hr />

			<DataSource
				getData={async () => await actions.getUserById("3")}
				resourceName="user"
			>
				<UserInfo />
			</DataSource>

			<hr />

			<DataSource
				getData={async () => await actions.getBooksById("2")}
				resourceName="book"
			>
				<BookInfo />
			</DataSource>

			<hr />

			<DataSourceRender
				getData={async () => await actions.getUserById("3")}
				render={(user) => <UserInfo user={user} />}
			></DataSourceRender>

			<hr />

			<DataSourceRender
				getData={async () => await actions.getBooksById("3")}
				render={(book) => <BookInfo book={book} />}
			></DataSourceRender>

			<hr />

			<DataSource
				getData={async () => getDataFromLocalStorage("book")}
				resourceName="book"
			>
				<BookInfo />
			</DataSource>

			<hr />

			<DataSourceRender
				getData={async () => getDataFromLocalStorage<Book[]>("books")()}
				render={(books) =>
					books?.length ? (
						<>
							{books.map((book, i) => (
								<BookInfo key={`${book.name}-${i}`} book={book} />
							))}
						</>
					) : (
						"No books"
					)
				}
			></DataSourceRender>
		</>
	);
}

export default App;
