import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
const cryptoNewsHeaders = {
    'X-BingApis-SDK': 'true',
    'X-RapidAPI-Key': 'bea8cfa945msh2d0ea30ea0cf6adp171b3ejsn906ef5f1b98b',
    'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
};

const baseUrl='https://bing-news-search1.p.rapidapi.com/news';

const createRequest = (url) => ({
    url,
    headers: cryptoNewsHeaders // Corrected typo here
});

export const cryptoNewsApi = createApi({
    reducerPath: 'cryptoNewsApi',
    baseQuery: fetchBaseQuery({ baseUrl, headers: cryptoNewsHeaders }), // Passing headers to fetchBaseQuery directly
    endpoints: (builder) => ({
        getCryptoNews: builder.query({
            query: ({newsCategory,count}) => createRequest(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`),
        })
    })
});


export const { useGetCryptoNewsQuery } = cryptoNewsApi;
