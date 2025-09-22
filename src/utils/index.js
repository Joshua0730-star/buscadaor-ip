import { API_KEY } from "astro:env/client";

export const OPTIONS = {
  method: "GET",
  headers: {
    "x-rapidapi-key": API_KEY,
    "x-rapidapi-host": "ip-geo-location10.p.rapidapi.com",
  },
};
