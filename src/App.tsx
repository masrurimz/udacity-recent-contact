import { Route, Routes } from "react-router-dom";
import {
	useGetAllContactsQuery,
	useRemoveContactMutation,
} from "./app/services";
import CreateContact from "./CreateContact";
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
			<Routes>
				<Route
					path="/"
					element={
						<ListContacts contacts={contacts} onDeleteContact={removeContact} />
					}
				/>
				<Route path="/create" element={<CreateContact />} />
			</Routes>
		</div>
	);
}

export default App;
