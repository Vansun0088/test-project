import { createSlice } from '@reduxjs/toolkit'
import { RootState } from "../../store";
import { campaignsApi } from "../../services/campaigns";
import { Campaign } from "../../types/campaigns";

type CampaignsState = {
    list: Campaign[],
    total: number
}

const slice = createSlice({
    name: 'campaigns',
    initialState: { list: [], total: 0 } as CampaignsState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addMatcher(
            campaignsApi.endpoints.listCampaigns.matchFulfilled,
            (state: CampaignsState, { payload }) => {
                state.total = payload.total;
            }
        )
    },
})

export default slice.reducer

export const selectCampaigns = (state: RootState) => state.campaigns;


