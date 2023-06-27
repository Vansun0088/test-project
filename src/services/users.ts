import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../store";
import { User } from "../types/campaigns";

export interface UserResponse {
	data: User
}

export interface UserRequest {
	search: number | null;
}

export const userApi = createApi({
	reducerPath: "userAPI",
	baseQuery: fetchBaseQuery({
		baseUrl: "/",
		headers: {
			"Content-type": "application/json",
		},
		prepareHeaders: (headers, { getState }) => {
			const token = (getState() as RootState).auth.token;
			if (token) {
				headers.set("authorization", `Bearer ${token}`);
			}
			return headers;
		},
	}),
	endpoints: (builder) => ({
		user: builder.query<UserResponse, UserRequest>({
			query: ({ search }) => ({
				url: `https://api.maverickmedia.click/api/v1/users/${search}`,
				method: "GET",
				headers: {
					"Content-type": "application/json",
				},
				transformResponse: (rawResult: UserResponse) => {
					return rawResult.data;
				},
			}),
		}),
	}),
});

export const { useUserQuery } = userApi;
