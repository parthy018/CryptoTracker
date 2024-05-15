import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoNewsHeaders = {
    'X-RapidAPI-Key': 'bea8cfa945msh2d0ea30ea0cf6adp171b3ejsn906ef5f1b98b',
    'X-RapidAPI-Host': 'real-time-news-data.p.rapidapi.com'
};

// const baseUrl='https://bing-news-search1.p.rapidapi.com/news';
const baseUrl = 'https://real-time-news-data.p.rapidapi.com/search?query=cyptocurrency&country=US&lang=en';

const createRequest = (url) => ({
    url,
    headers: cryptoNewsHeaders // Corrected typo here
});

export const cryptoNewsApi = createApi({
    reducerPath: 'cryptoNewsApi',
    baseQuery: fetchBaseQuery({ baseUrl, headers: cryptoNewsHeaders }), // Passing headers to fetchBaseQuery directly
    endpoints: (builder) => ({
        getCryptoNews: builder.query({
            query: ({newsCategory}) => createRequest(`/search?query=${newsCategory}&country=US&lang=en`),
        })
    })
});


export const { useGetCryptoNewsQuery } = cryptoNewsApi;
