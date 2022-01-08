import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const productApi = createApi({
    reducerPath: 'productApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://fakestoreapi.com' }),
    endpoints: (builder) => ({
      getAllProductList: builder.query({
        query: () => "products", //endpoint
      }),
    }),
  })

  export const {useGetAllProductListQuery} = productApi; // useGetAllProductListQuery=>custom hook