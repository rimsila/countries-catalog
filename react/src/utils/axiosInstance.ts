import axios, { AxiosError } from "axios";

const API_BASE_URL = "https://restcountries.com/v3.1"; //!todo: please use process.env.API_BASE_URL for prod

const axiosInstance = axios.create({
  headers: {
    "Content-Type": "application/json",
  },
  baseURL: API_BASE_URL,
});

// Add a request interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    return config;
  },
  (error: AxiosError) => {
    console.log("error", error);
    return Promise.reject(error);
  }
);

// Add a response interceptor
axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    console.log("network error", error);

    return Promise.reject(error);
  }
);

export default axiosInstance;
