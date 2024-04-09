import fetch from 'node-fetch';
import { URL } from 'url';
import { config as dotenvConfig } from "dotenv";
dotenvConfig();

const request = async (urn, { method = 'GET', body, headers }) => {
  const apiUrl = new URL(`${process.env.URL}api/v3/${urn}`);
  const response = await fetch(apiUrl.href, {
    method,
    body: JSON.stringify(body),
    headers: {
      ...headers,
      'Content-Type': 'application/json',
      'api-key': process.env.API_KEY,
      'platform': 'frontend',
    }
  });
  return await response.json();
};

export default request;
