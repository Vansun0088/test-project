import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../store";
import { Pagination } from "../types/pagination";
import { Campaign } from "../types/campaigns";

type Url = {
	url: null | string;
	label: string;
	active: boolean;
};

interface ListResponse<T> {
	data: {
		data: T[];
		current_page: number;
		first_page_url: string;
		from: number;
		last_page: number;
		last_page_url: string;
		links: Url[];
		total: number;
	};
}

export const campaignsApi = createApi({
	reducerPath: "campaignsAPI",
	baseQuery: fetchBaseQuery({
		baseUrl: "https://api.maverickmedia.click/api/v1/",
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
		listCampaigns: builder.query<ListResponse<Campaign>["data"], Pagination>({
			query: ({ page, limit }) => `campaigns?page=${page}&limit=${limit}`,
			transformResponse: (rawResult: ListResponse<Campaign>, _) => {
				return rawResult.data;
			},
		}),
	}),
});

export const { useListCampaignsQuery } = campaignsApi;
