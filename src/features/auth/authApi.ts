// PROJECT IMPORT
import { api } from "../../lib/services/api";

export const authApi = api.injectEndpoints({
    endpoints: (build) => ({
        login: build.mutation<any, any>({
            query: (params) =>({
                url: "/login",
                method:'POST',
                body:params
            }),
            invalidatesTags: ["Auth"],
        }),
    }),
});

export const { useLoginMutation } = authApi;

export const {
    endpoints: { login },
} = authApi;
