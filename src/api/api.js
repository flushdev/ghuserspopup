import request from "./request";
import { URL as gh } from "../constants/api";

export const Api = {
  getUsers: () => request("GET", gh.BASE_URL + gh.users),
  getWithSchema: schema =>
    request("POST", "https://cors-anywhere.herokuapp.com/https://api.github.com/graphql", {
      query: schema
    })
};
