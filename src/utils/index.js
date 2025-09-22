import { RAPID_API_KEY } from "astro:env/client";

export const OPTIONS = {
  method: "GET",
  headers: {
    "x-rapidapi-key": RAPID_API_KEY,
    "x-rapidapi-host": "iplocate1.p.rapidapi.com",
  },
};
