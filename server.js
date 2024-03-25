import express from "express";

const app = express();

app.use(express.json());

const currentUser = {
	name: "Sarah Waters",
	age: 55,
	country: "United Kingdom",
	books: ["Fingersmith", "The Night Watch"],
};

let users = [
	{
		id: "1",
		name: "Sarah Waters",
		age: 55,
		country: "United Kingdom",
		books: ["Fingersmith", "The Night Watch"],
	},
	{
		id: "2",
		name: "Haruki Murakami",
		age: 71,
		country: "Japan",
		books: ["Norwegian Wood", "Kafka on the Shore"],
	},
	{
		id:"3",
		name: "Chimamanda Ngozi Adichie",
		age: 43,
		country: "Nigeria",
		books: ["Half of a Yellow Sun", "Americanah"],
	},
];

const books = [
	{
		id: "1",
		name: "To Kill a Mockingbird",
		pages: 281,
		title: "Harper Lee",
		price: 12.99,
	},
	{
		id: "2",
		name: "The Catcher in the Rye",
		pages: 224,
		title: "J.D. Salinger",
		price: 9.99,
	},
	{
		id: "3",
		name: "The Little Prince",
		pages: 85,
		title: "Antoine de Saint-Exupéry",
		price: 7.99,
	},
];

app.get("/api/current-user", (req, res) => res.json(currentUser));

app.get("/api/users/:id", (req, res) => {
	const { id } = req.params;
	console.log(id);
	res.json(users.find((user) => user.id === id));
});

app.get("/api/users", (req, res) => res.json(users));

app.post("/api/users/:id", (req, res) => {
	const { id } = req.params;
	const { user: editedUser } = req.body;

	users = users.map((user) => (user.id === id ? editedUser : user));

	res.json(users.find((user) => user.id === id));
});

app.get("/api/books", (req, res) => res.json(books));

app.get("/api/books/:id", (req, res) => {
	const { id } = req.params;
	res.json(books.find((book) => book.id === id));
});

const SERVER_PORT = 9090;
app.listen(SERVER_PORT, () =>
	console.log(`Server is listening on port: ${SERVER_PORT}`)
);
