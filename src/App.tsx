import "./App.css";
import { ListContacts } from "./ListContacts";

export interface Contact {
	id: string;
	name: string;
	email: string;
	avatarURL: string;
}

const contacts: Contact[] = [
	{
		id: "ryan",
		name: "Ryan Florence",
		email: "ryan@reacttraining.com",
		avatarURL: "http://localhost:5001/ryan.jpg",
	},
	{
		id: "michael",
		name: "Michael Jackson",
		email: "michael@reacttraining.com",
		avatarURL: "http://localhost:5001/michael.jpg",
	},
	{
		id: "tyler",
		name: "Tyler McGinnis",
		email: "tyler@reacttraining.com",
		avatarURL: "http://localhost:5001/tyler.jpg",
	},
];

function App() {
	return (
		<div className="App">
			<ListContacts contacts={contacts} />
		</div>
	);
}

export default App;
