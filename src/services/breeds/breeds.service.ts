//import HotelSchema from '../models/breed.model';
import "dotenv/config";
import { queryParse } from "../../utils/query.parse";
import { queryParams } from "../../utils/query.params";

const options: any = {
  method: "GET",
  headers: {
    "x-api-key": process.env.API_KEY,
  },
};

export const findBreeds = async (query?: any) => {
  const paramsQuery: any = queryParams(query);
  const params: any = queryParse(paramsQuery);
  return await fetch(`${process.env.CAT_API}/search?${params}`, options);
};

export const findBreedsById = async (id: string) => {
  return await fetch(`${process.env.CAT_API}/${id}`, options);
};
