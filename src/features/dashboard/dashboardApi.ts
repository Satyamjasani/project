// PROJECT IMPORT
import { api } from '../../lib/services/api'

export const dashboardApi = api.injectEndpoints({
    endpoints: (build) => ({
        getDashboard: build.query<string, void>({
            query: () => '/dashboard',
            providesTags: ['Dashboard']
        })
    })
})

export const { useGetDashboardQuery } = dashboardApi
export const {
    endpoints:{
        getDashboard
    }
} = dashboardApi