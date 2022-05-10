import axios, { AxiosError, AxiosInstance } from "axios";

class HTTP {
  private static instance: AxiosInstance;
  private constructor() {}

  public static getInstance(): AxiosInstance {
    if (!HTTP.instance) {
      HTTP.instance = axios.create({
        baseURL: process.env.REACT_APP_API_URL,
        timeout: 5000,
        headers: { "Access-Control-Allow-Origin": "*" },
      });
    }

    HTTP.instance.defaults.headers.common["Authorization"] =
      "Bearer " + sessionStorage.getItem("token");
    console.log("Hey");
    return HTTP.instance;
  }
}

export default HTTP;
