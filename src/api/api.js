import request from "./request";
import { URL as gh } from "../constants/api";

export const Api = {
  getUsers: () => request("GET", gh.BASE_URL + gh.users),
  getWithSchema: schema =>
    request("POST", gh.GRAPHQL_URL, {
      query: schema
    })
};
