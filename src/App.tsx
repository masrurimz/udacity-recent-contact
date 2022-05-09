import {
	useGetAllContactsQuery,
	useRemoveContactMutation,
} from "./app/services";
import { ListContacts } from "./ListContacts";

export interface Contact {
	id: string;
	name: string;
	email: string;
	avatarURL: string;
}

function App() {
	const { data: contacts } = useGetAllContactsQuery();

	const [removeContact] = useRemoveContactMutation();

	return (
		<div>
			<ListContacts contacts={contacts} onDeleteContact={removeContact} />
		</div>
	);
}

export default App;
