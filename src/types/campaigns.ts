export type Campaigns = {
	title: string;
};

export type CampaignsResponse = {
	data: Campaigns[];
};

export type Campaign = {
	CA_ID: string;
	CA_NAME: string;
	CA_DESC: string;
	CA_MANAGER_ID: number;
	CA_PREVIEW_URL: string;
	CA_STARTD: string;
	CA_STOPD: string;
	CA_COST_AMOUNT: number;
	CA_COST_CURRENCY: string;
	CA_REDIRECT_CAMPAIGN: number;
	CA_GEO_REDIRECT: number;
	CA_PRIVATE: boolean;
	CA_MARKETPLACE_IMG: string;
	CA_ALLOWED_TRAFFIC: string;
	CA_APPROVAL: boolean;
	CA_CUT: boolean;
	CA_FILE: string;
	CA_HIDE_REF: boolean;
	CA_DOMAIN: null | string;
	CA_STATUS: string;
	CA_PROTOCOL: string;
	CA_COST_TYPE: string;
	CA_MARKETPLACE: string;
	CA_TRAFFIC: string;
	CA_FEATURE: string;
	CA_OFFER_TYPE: string;
	CA_OFFER_FLOW: string;
	CREATED_AT: string;
	UPDATED_AT: string;
};

export type User = {
	UR_ID: number;
	UR_ACCOUNT_MANAGER: number;
	UR_STATUS: number;
	UR_READWRITE: number;
	UR_COMPANY_ID: number | null;
	UR_COMPANY_NAME: string;
	UR_ABBREV: string;
	UR_ABBREV_EXT: string;
	UR_CURRENCY: string;
	UR_ADDRESS1: string;
	UR_ADDRESS2: string;
	UR_CITY: string;
	UR_COUNTRY: string;
	UR_ZIPCODE: string;
	UR_PHONE: string;
	UR_VAT: { backURL: string; popURL: string };
	UR_FIRSTNAME: string;
	UR_LASTNAME: string;
	UR_EMAIL: string;
	UR_EMAIL2: string;
	UR_CHAT: string;
	UR_LANGUAGE: string;
	UR_TIMEZONE: string;
	UR_LASTLOGIN: string;
	UR_IP: string;
	UR_DOMAIN: string;
	UR_TYPE: string;
	UR_COP: null;
	CSO_REVENUE_TYPE_ENUM: string;
	CREATED_AT: null;
	UPDATED_AT: string;
};
