import http from "./httpService";

const recoveryAPIEndpoint = process.env.REACT_APP_API_URL + "/password/forgot";
const resetAPIEndpoint = process.env.REACT_APP_API_URL + "/reset-password";

export function sendRecoveryLink(email) {
  return http.post(recoveryAPIEndpoint, { email: email });
}

export function resetPassword(email, password, token) {
  return http.post(resetAPIEndpoint, {
    email: email,
    password: password,
    token: token,
  });
}
