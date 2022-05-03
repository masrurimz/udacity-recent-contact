import { Contact } from "./App";

interface ContactListProps {
	contacts: Contact[];
}

export function ListContacts({ contacts }: ContactListProps) {
	return (
		<ol>
			{contacts.map((person) => (
				<li key={person.id}>{person.name}</li>
			))}
		</ol>
	);
}
