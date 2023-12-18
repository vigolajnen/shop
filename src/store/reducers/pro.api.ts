import { createApi, fetchBaseQuery, retry } from '@reduxjs/toolkit/query/react';
import { BASE_URL } from '../../utils/constants';
import { IService } from '../../models';

export const proApi = createApi({
  reducerPath: 'pro/api',
  baseQuery: retry(fetchBaseQuery({ baseUrl: BASE_URL }), { maxRetries: 3 }),
  refetchOnFocus: true,
  endpoints: builder => ({
    getPriceCities: builder.query<any, string>({
      query: () => ({
        url: `data.json`,
      }),
      extraOptions: { maxRetries: 10 },
      transformResponse: (response: IService) => response.services,
    }),
  }),
});

export const { useGetPriceCitiesQuery } = proApi;
