import http from "./httpService";

const apiEndpoint = process.env.REACT_APP_API_URL + "/users";

interface User {
  name: string;
  phone_number: string;
  email: string;
  password: string;
}

export function register(user: User) {
  return http.getInstance().post(`${apiEndpoint}/register`, user);
}

export function getUser() {
  return http.getInstance().get(`${apiEndpoint}/me`);
}
