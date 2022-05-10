import http from "./httpService";

const apiEndpoint = process.env.REACT_APP_API_URL + "/users/login";

export function login(email: string, password: string) {
  return http.getInstance().post(apiEndpoint, { email, password });
}

export function logout() {
  sessionStorage.removeItem("token");
}

export function getJwt() {
  return sessionStorage.getItem("token");
}

const authModule = {
  login,
  logout,
  getJwt,
};

export default authModule;
