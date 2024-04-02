
import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query'

const cryptoApiHeaders={
    'x-rapidapi-host': process.env.REACT_APP_CRYPTO_RAPIDAPI_HOST,
    'x-rapidapi-key': process.env.REACT_APP_RAPIDAPI_KEY,
}
const baseUrl='https://coinranking-api1.p.rapidapi.com/currencies-reference';
// const baseUrl='https://coinranking1.p.rapidapi.com';
