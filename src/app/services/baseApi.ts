// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl =
	process.env.REACT_APP_CONTACTS_API_URL || "http://localhost:5001";

let token = localStorage.token;

if (!token) token = localStorage.token = Math.random().toString(36).substr(-8);

// Define a service using a base URL and expected endpoints
export const baseApi = createApi({
	reducerPath: "api",
	baseQuery: fetchBaseQuery({
		baseUrl,
		prepareHeaders: (headers) => {
			headers.set("Accept", "application/json");
			headers.set("Authorization", token);

			return headers;
		},
	}),
	endpoints: () => ({}),
	tagTypes: ["Contacts"],
});
