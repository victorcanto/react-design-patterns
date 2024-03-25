import { LargeAuthorListItem } from "./components/authors/large-list-items";
import { SmallAuthorListItem } from "./components/authors/small-list-items";
import { LargeBookListItem } from "./components/books/large-list-items";
import { SmallBookListItem } from "./components/books/small-list-items";
import { SplitScreen } from "./components/layout/split-screen";
import { NumberedList } from "./components/lists/numbered";
import { RegularList } from "./components/lists/regular";
import { authors } from "./data/authors";
import { books } from "./data/books";

const LeftSideComponent = ({ title }: { title: string }) => {
	return <h2 style={{ backgroundColor: "red" }}>{title}</h2>;
};

const RightSideComponent = ({ title }: { title: string }) => {
	return <h2 style={{ backgroundColor: "orange" }}>{title}</h2>;
};

function App() {
	return (
		<>
			<SplitScreen leftWidth={1} rightWidth={3}>
				<LeftSideComponent title="Left" />
				<RightSideComponent title="Right" />
			</SplitScreen>

			<div>
				<RegularList
					items={authors}
					sourceName="author"
					ItemComponent={SmallAuthorListItem}
				/>

				<hr />

				<RegularList
					items={authors}
					sourceName="author"
					ItemComponent={LargeAuthorListItem}
				/>

				<RegularList
					items={books}
					sourceName="book"
					ItemComponent={SmallBookListItem}
				/>

				<hr />

				<NumberedList
					items={books}
					sourceName="book"
					ItemComponent={LargeBookListItem}
				/>
			</div>
		</>
	);
}

export default App;
