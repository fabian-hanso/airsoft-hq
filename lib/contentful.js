import { createClient } from 'contentful';

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID || "ldtfgro1ce1s",
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN || "vY3pEa1C6dZfzJOBStLvbvetfIUd-Cv8d1ccjiJTjfE",
});

export default client;