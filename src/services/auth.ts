import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../store";

export interface AuthResponse {
	data: {
		access_token: string;
	};
}

export interface LoginRequest {
	email: string;
	password: string;
}

export const authApi = createApi({
	reducerPath: 'authAPI',
	baseQuery: fetchBaseQuery({
		baseUrl: "/",
		prepareHeaders: (headers, { getState }) => {
			const token = (getState() as RootState).auth.token;
			if (token) {
				headers.set("authorization", `Bearer ${token}`);
			}
			return headers;
		},
	}),
	endpoints: (builder) => ({
		login: builder.mutation<AuthResponse, LoginRequest>({
			query: ({ email, password }: LoginRequest) => ({
				url: `https://api.maverickmedia.click/api/v1/token`,
				method: "POST",
				body: `email=${email}&password=${password}`,
				headers: {
					"Content-Type": "application/x-www-form-urlencoded",
				},
			}),
		}),
	}),
});

export const { useLoginMutation } = authApi;
