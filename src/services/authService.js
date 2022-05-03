import http from "./httpService";

const apiEndpoint = process.env.REACT_APP_API_URL + "/users/login";

http.setJwt(getJwt());

export function login(email, password) {
  return http.post(apiEndpoint, { email, password });
}

export function logout() {
  localStorage.removeItem("token");
}

export function getJwt() {
  return localStorage.getItem("token");
}

export function setJwt() {
  http.setJwt(getJwt());
}

export default {
  login,
  logout,
  getJwt,
  setJwt,
};
