import {
	HStack,
	IconButton,
	Image,
	List,
	ListItem,
	VStack,
} from "@chakra-ui/react";
import { MdClose } from "react-icons/md";

import { Contact } from "./App";

interface ContactListProps {
	contacts: Contact[];
}

export function ListContacts({ contacts }: ContactListProps) {
	return (
		<List spacing={3}>
			{contacts.map((person) => (
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
	);
}
