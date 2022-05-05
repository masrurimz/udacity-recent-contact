import { useState } from "react";
import { ListContacts } from "./ListContacts";

export interface Contact {
	id: string;
	name: string;
	email: string;
	avatarURL: string;
}

const initialContacts: Contact[] = [
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
	const [contacts, setContacts] = useState<Contact[]>(initialContacts);

	const removeContact = (contact: Contact) =>
		setContacts((prevContacts) =>
			prevContacts.filter((c) => c.id !== contact.id),
		);

	return (
		<div>
			<ListContacts contacts={contacts} onDeleteContact={removeContact} />
		</div>
	);
}

export default App;
