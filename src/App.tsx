import { useGetAllContactsQuery } from "./app/services";
import { ListContacts } from "./ListContacts";

export interface Contact {
	id: string;
	name: string;
	email: string;
	avatarURL: string;
}

function App() {
	const { data: contacts } = useGetAllContactsQuery();

	// const removeContact = (contact: Contact) =>
	// 	setContacts((prevContacts) =>
	// 		prevContacts.filter((c) => c.id !== contact.id),
	// 	);

	return (
		<div>
			<ListContacts contacts={contacts} onDeleteContact={() => {}} />
		</div>
	);
}

export default App;
