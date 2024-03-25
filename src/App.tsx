import { LargeBookListItem } from "./components/books/large-list-items";
import { Modal } from "./components/layout/modal";

import { books } from "./data/books";

function App() {
	return (
		<Modal>
			<LargeBookListItem book={books[0]} />
		</Modal>
	);
}

export default App;
