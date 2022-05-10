import http from "./httpService";

const apiEndpoint = process.env.REACT_APP_API_URL + "/operations";

export function getOrders() {
  return http.getInstance().get(`${apiEndpoint}`);
}

export function getOrder(id: string) {
  return http.getInstance().get(`${apiEndpoint}/detail/${id}`);
}
