import axios, { AxiosInstance } from "axios";

const axiosParams = {
  baseURL:
    process.env.NODE_ENV === "development" ? "http://localhost:8080" : "/",
};

const axiosInstance = axios.create(axiosParams);

const api = (axios: AxiosInstance) => {
  return {
    get: (url: string, config = {}) => axios.get(url, config),
    delete: (url: string, config = {}) => axios.delete(url, config),
    post: (url: string, body: unknown, config = {}) =>
      axios.post(url, body, config),
    put: (url: string, body: unknown, config = {}) =>
      axios.put(url, body, config),
    patch: (url: string, body: unknown, config = {}) =>
      axios.patch(url, body, config),
  };
};

export default api(axiosInstance);
