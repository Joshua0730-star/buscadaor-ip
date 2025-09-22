// @ts-check
import { defineConfig, envField } from "astro/config";

// import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  vite: {
    // plugins: [tailwindcss()]
  },
  // output: "server",
  env: {
    schema: {
      API_KEY: envField.string({ access: "public", context: "client" }),
      RAPID_API_KEY: envField.string({ access: "public", context: "client" }),
    },
  },
});
