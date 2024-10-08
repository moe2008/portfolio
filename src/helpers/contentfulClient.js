/* eslint-disable no-undef */
// src/contentfulClient.js
import { createClient } from 'contentful';


const space = import.meta.env.VITE_REACT_APP_CONTENTFUL_SPACE_ID;
const accessToken = import.meta.env.VITE_REACT_APP_CONTENTFUL_ACCESS_TOKEN;

if (!space || !accessToken) {
  throw new Error('Contentful space ID and access token are required.');
}

const client = createClient({
  space,
  accessToken,
});

export default client;
