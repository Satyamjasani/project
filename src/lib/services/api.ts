import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: '/api',
    credentials: 'include',
    referrerPolicy: 'origin',
    mode: 'cors',
    // prepareHeaders: async (headers) => {
      // headers.set(
      //   'Authorization',
      //   `Bearer `
      // );
      // headers.set('Content-Type', 'application/json');
      // return headers;
    // },
  }),
  reducerPath: 'api',
  endpoints: (builder) => ({
  }),
  tagTypes: ['Auth','Dashboard'],
});

export const { } = api;
