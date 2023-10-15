import { useMemo } from "react";

// PROJECT IMPORT
import { dashboardApi } from "./dashboardApi";
import { useAppSelector } from "../../lib/hooks";
import { RootState } from "../../lib/services/store";

// THIRD - PARTY IMPORT
import { createSlice } from "@reduxjs/toolkit";

export interface DashboardState {
    dashboard:string;
}
const initialState:DashboardState = {
    dashboard:'',
}
const dashboardSlice = createSlice({
    name:'dashboard',
    initialState,
    reducers:{
    },
    extraReducers:(builder) => {
        builder.addMatcher(
            dashboardApi.endpoints.getDashboard.matchFulfilled,
            (state:DashboardState,action) => {
                state.dashboard = action.payload
            }
        )
    }
})

export default dashboardSlice.reducer

export const selectDashboard = (state:RootState) => state.dashboard.dashboard
export const useDashboard = () => {
    const dashboard = useAppSelector(selectDashboard)
    return useMemo(() => dashboard, [dashboard])
}