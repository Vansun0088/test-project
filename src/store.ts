import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "./services/auth";
import authReducer from "./features/auth/authSlice";
import campaignsReducer from "./features/campaigns/campaignsSlice";
import { campaignsApi } from "./services/campaigns";
import { userApi } from "./services/users";

export const store = configureStore({
	reducer: {
		[authApi.reducerPath]: authApi.reducer,
		[campaignsApi.reducerPath]: campaignsApi.reducer,
		[userApi.reducerPath]: userApi.reducer,
		auth: authReducer,
		campaigns: campaignsReducer,
	},
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([
		campaignsApi.middleware,
		userApi.middleware,
		authApi.middleware,
	]),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
