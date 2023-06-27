import { createSlice } from '@reduxjs/toolkit'
import { authApi } from "../../services/auth";
import {RootState} from "../../store";

type AuthState = {
    token: string | null
}

const slice = createSlice({
    name: 'auth',
    initialState: { token: null } as AuthState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addMatcher(
            authApi.endpoints.login.matchFulfilled,
            (state: AuthState, { payload }) => {
                state.token = payload.data.access_token
            }
        )
    },
})

export default slice.reducer

export const selectIsLoggedIn = (state: RootState) => !!state.auth.token


