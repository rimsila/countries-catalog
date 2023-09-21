import { defineConfig } from "umi";

export default defineConfig({
  jsMinifier: "esbuild",
  jsMinifierOptions: {
    minifyWhitespace: true,
    minifyIdentifiers: true,
    minifySyntax: true,
    drop: ["console"],
  },

  cssMinifierOptions: {
    minifyWhitespace: true,
    minifySyntax: true,
  },
  codeSplitting: {
    // granularChunks as testing in lighthouse it get 1% better performance
    jsStrategy: "granularChunks",
    jsStrategyOptions: {},
    cssStrategyOptions: {},
  },
});
