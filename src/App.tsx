import "./App.css";

interface Person {
	name: string;
}

interface ContactListProps {
	contacts: Person[];
}

export function ContactList({ contacts }: ContactListProps) {
	return (
		<ol>
			{contacts.map((person) => (
				<li>{person.name}</li>
			))}
		</ol>
	);
}

function App() {
	return (
		<div className="App">
			<ContactList
				contacts={[{ name: "Michael" }, { name: "Ryan" }, { name: "Tyler" }]}
			/>
			<ContactList
				contacts={[{ name: "Amanda" }, { name: "Richard" }, { name: "Geoff" }]}
			/>
		</div>
	);
}

export default App;
