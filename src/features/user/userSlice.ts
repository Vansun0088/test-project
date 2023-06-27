import { createSlice } from "@reduxjs/toolkit";
import { User } from "../../types/campaigns";
import { userApi } from "../../services/users";

type UserState = {
	user: User | undefined;
};

const slice = createSlice({
	name: "user",
	initialState: { user: undefined } as UserState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addMatcher(userApi.endpoints.user.matchFulfilled, (state: UserState, { payload }) => {
			state.user = payload.data;
		});
	},
});

export default slice.reducer;
