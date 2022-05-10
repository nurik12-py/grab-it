import http from "./httpService";

const apiEndpoint = process.env.REACT_APP_API_URL + "/fridges/locations";

export function getFridges() {
  return http.getInstance().get(`${apiEndpoint}`);
}
