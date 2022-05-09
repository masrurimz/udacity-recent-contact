import { Contact, ContactsQueryResult } from "../types";
import { baseApi } from "./baseApi";

export const contactsApi = baseApi.injectEndpoints({
	overrideExisting: true,
	endpoints: (build) => ({
		getAllContacts: build.query<Contact[], void>({
			query: () => "/contacts",
			transformResponse: (rawResult: ContactsQueryResult) => rawResult.contacts,
		}),
	}),
});

export const { useGetAllContactsQuery } = contactsApi;
