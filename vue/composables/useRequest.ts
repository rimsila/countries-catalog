import type { UseFetchOptions } from "nuxt/app";
import { defu } from "defu";

const API_BASE_URL = "https://restcountries.com/v3.1"; //!todo: please use useRuntimeConfig for prod

export function useRequest<T>(url: string, options: UseFetchOptions<T> = {}) {
  //   const userAuth = useCookie('token')
  //   const config = useRuntimeConfig()

  const defaults: UseFetchOptions<T> = {
    baseURL: API_BASE_URL,
    // cache request
    key: url,

    //     headers: userAuth.value
    //       ? { Authorization: `Bearer ${userAuth.value}` }
    //       : {},

    onResponse(_ctx) {
      // _ctx.response._data = new myBusinessResponse(_ctx.response._data)
    },

    onResponseError(_ctx) {
      // throw new myBusinessError()
    },
  };

  // for nice deep defaults, please use unjs/defu
  const params = defu(options, defaults);

  return useFetch(url, params);
}
