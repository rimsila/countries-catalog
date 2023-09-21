import axios from "axios";
import { CountriesCatalog } from "./type";
import { axiosInstance } from "@/utils";

export const getAllCountries = async () => {
  return await axiosInstance<CountriesCatalog>("/all").catch((err) =>
    console.log(err)
  );
};
