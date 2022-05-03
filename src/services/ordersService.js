import http from "./httpService";

const apiEndpoint = process.env.REACT_APP_API_URL + "/operations";

export function getOrders() {
  return http.get(`${apiEndpoint}`);
}

export function getOrder(id) {
  return http.get(`${apiEndpoint}/detail/${id}`);
}
