import http from "./httpService";

const recoveryAPIEndpoint = process.env.REACT_APP_API_URL + "/password/forgot";
const resetAPIEndpoint = process.env.REACT_APP_API_URL + "/reset-password";

export function sendRecoveryLink(email: string) {
  return http.getInstance().post(recoveryAPIEndpoint, { email: email });
}

export function resetPassword(email: string, password: string, token: string) {
  return http.getInstance().post(resetAPIEndpoint, {
    email: email,
    password: password,
    token: token,
  });
}
