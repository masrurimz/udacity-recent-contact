import { Contact, ContactsQueryResult } from "../types";
import { baseApi } from "./baseApi";

export const contactsApi = baseApi.injectEndpoints({
	overrideExisting: true,
	endpoints: (build) => ({
		getAllContacts: build.query<Contact[], void>({
			query: () => "/contacts",
			transformResponse: (rawResult: ContactsQueryResult) => rawResult.contacts,
			providesTags: ["Contacts"],
		}),

		removeContact: build.mutation<void, Contact>({
			query: (contact) => ({
				url: `/contacts/${contact.id}`,
				method: "DELETE",
			}),
			onQueryStarted: ({ id }, { dispatch, queryFulfilled }) => {
				dispatch(
					contactsApi.util.updateQueryData(
						"getAllContacts",
						undefined,
						(contacts) => {
							contacts.filter((c) => c.id !== id);
						},
					),
				);

				queryFulfilled.catch(() =>
					dispatch(contactsApi.util.invalidateTags(["Contacts"])),
				);
			},
			invalidatesTags: ["Contacts"],
		}),
	}),
});

export const { useGetAllContactsQuery, useRemoveContactMutation } = contactsApi;
