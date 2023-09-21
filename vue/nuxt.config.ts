const isProd = process.env.NODE_ENV === "production";

export default defineNuxtConfig({
  ssr: false,
  app: {
    head: {
      title: "Countries catalog",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          hid: "description",
          name: "description",
          content: "welcome to countries catalog",
        },
        { name: "format-detection", content: "telephone=no" },
      ],
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    },
    baseURL: isProd ? "/countries-catalog/" : "/",
    buildAssetsDir: "assets",
  },
  modules: ["@element-plus/nuxt", "@nuxtjs/tailwindcss"],
  elementPlus: {},
});
