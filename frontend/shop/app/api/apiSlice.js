// import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
// import {BASE_URL} from '../utils/constants'

// export const apiSlice = createApi({
//     reducerPath: 'api',
//     baseQuery: fetchBaseQuery({baseUrl: BASE_URL}),
//     tagTypes: ['General'],
//     endpoints: builder => ({
//         getGeneral: builder.query({
//             query: () => '/',
//             providesTags: ['General']
//         }),
//     })
// });

// export const {useGetGeneralQuery} = apiSlice;