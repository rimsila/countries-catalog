import { defineConfig } from "umi";

export default defineConfig({
  npmClient: "pnpm",
  plugins: [require.resolve("@umijs/plugins/dist/tailwindcss")],
  tailwindcss: {},
});
