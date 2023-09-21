
# Deployment

1. Generate with `npm run generate`
2. Deploy with `npm run deploy`

Router config:

```ts
export default defineNuxtConfig({
  app: {
    baseURL: '/nuxt-github-pages/', // baseURL: '/<repository>/'
    buildAssetsDir: 'assets', // don't use "_" at the begining of the folder name to avoids nojkill conflict
  }
}
```
