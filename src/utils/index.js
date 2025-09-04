import { API_KEY } from "astro:env/client";

// console.log(API_KEY);
// const { API_KEY } = process.env;

export const OPTIONS = {
  method: "GET",
  headers: {
    "x-rapidapi-key": API_KEY,
    "x-rapidapi-host": "ip-lookup-threat-detection-api.p.rapidapi.com",
  },
};
