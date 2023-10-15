import { useMemo } from 'react';

// PROJECT IMPORT
import { RootState } from '../../lib/services/store';
import { useAppSelector } from '../../lib/hooks';

// THIRD - PARTY IMPORT
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface CommonState {
    isDrawerOpen: boolean;
}
const initialState: CommonState = {
    isDrawerOpen: false
}
const commonSlice = createSlice({
    name: 'common',
    initialState,
    reducers: {
        toggleDrawer: (state:CommonState, action:PayloadAction<boolean>) => {
            state.isDrawerOpen = action.payload
        }
    }
})

export default commonSlice.reducer
export const { toggleDrawer } = commonSlice.actions

export const selectIsDrawerOpen = (state: RootState) => state.common.isDrawerOpen
export const useIsDrawerOpen = () => {
    const isDrawerOpen = useAppSelector(selectIsDrawerOpen)
    return useMemo(() => isDrawerOpen, [isDrawerOpen])
}