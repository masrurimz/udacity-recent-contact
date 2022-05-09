import {
	Box,
	Button,
	Center,
	HStack,
	Icon,
	IconButton,
	Image,
	Input,
	InputGroup,
	InputLeftElement,
	InputRightElement,
	List,
	ListItem,
	VStack,
} from "@chakra-ui/react";
import { useState } from "react";
import { MdClose, MdPersonAdd, MdSearch } from "react-icons/md";
import { useNavigate, useRoutes } from "react-router-dom";

import { Contact } from "./App";

interface ContactListProps {
	contacts?: Contact[];
	onDeleteContact: (contact: Contact) => any;
}

export function ListContacts({ contacts, onDeleteContact }: ContactListProps) {
	const navigate = useNavigate();

	const [query, setQuery] = useState("");

	const updateQuery = (e: React.ChangeEvent<HTMLInputElement>) => {
		setQuery(e.target.value.trim());
	};

	const clearQuery = () => setQuery("");

	const contactsFiltered = contacts
		?.filter(
			(c) => c.name.toLowerCase().indexOf(query.trim().toLowerCase()) > -1,
		)
		.sort((a, b) => a.name.localeCompare(b.name));

	return (
		<Box>
			<InputGroup size={"lg"}>
				<InputLeftElement
					alignItems={"center"}
					pointerEvents="none"
					children={<Icon as={MdSearch} />}
				/>
				<Input
					type={"text"}
					variant="flushed"
					placeholder="Search contacts"
					value={query}
					onChange={updateQuery}
				/>
				<InputRightElement>
					<IconButton
						aria-label="Add Contact"
						icon={<MdPersonAdd />}
						variant="ghost"
						fontSize={"3xl"}
						onClick={() => navigate("/create")}
					/>
				</InputRightElement>
			</InputGroup>
			{contactsFiltered?.length !== contacts?.length ? (
				<Center pt={5}>
					<HStack spacing={1}>
						<p>
							Showing {contactsFiltered?.length} of {contacts?.length} total
							contact
						</p>
						<Button variant={"link"} onClick={clearQuery}>
							Show all
						</Button>
					</HStack>
				</Center>
			) : null}
			<List spacing={3}>
				{contactsFiltered?.map((person) => (
					<ListItem
						key={person.id}
						p={5}
						m={{ base: 0, md: 5 }}
						borderWidth={{ base: 0, md: 1 }}
						rounded={{ base: 0, md: "md" }}>
						<HStack spacing={5}>
							<Image
								boxSize={"60px"}
								src={person.avatarURL}
								alt={`${person.name} contact avatar`}
								rounded={"full"}
							/>
							<VStack flex={1} alignItems={"flex-start"}>
								<p>{person.name}</p>
								<p>{person.email}</p>
							</VStack>
							<IconButton
								onClick={() => onDeleteContact(person)}
								rounded="full"
								p={1}
								colorScheme="gray"
								aria-label={`Delete contact ${person.name}`}
								icon={<MdClose />}
								fontSize={32}
							/>
						</HStack>
					</ListItem>
				))}
			</List>
		</Box>
	);
}
