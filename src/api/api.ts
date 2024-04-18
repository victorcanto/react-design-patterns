/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { AxiosInstance } from "axios";

const axiosParams = {
  baseURL:
    process.env.NODE_ENV === "development" ? "http://localhost:8080" : "/",
};

const axiosInstance = axios.create(axiosParams);

export const didAbort = (error: unknown) =>
  axios.isCancel(error) && { aborted: true };

const getCancelSource = () => axios.CancelToken.source();

export const isApiError = (error: unknown) => axios.isAxiosError(error);

const withAbort = (fn: (...args: any[]) => Promise<any>) => {
  const executor = async (...args: any[]) => {
    const originalConfig = args[args.length - 1];
    const { abort, ...config } = originalConfig;

    if (typeof abort === "function") {
      const { cancel, token } = getCancelSource();
      config.cancelToken = token;
      abort(cancel);
    }

    try {
      if (args.length > 2) {
        const [url, body] = args;
        return await fn(url, body, config);
      } else {
        const [url] = args;
        return await fn(url, config);
      }
    } catch (error: any) {
      if (didAbort(error)) {
        error.aborted = true;
      }
      throw error;
    }
  };

  return executor;
};

const api = (axios: AxiosInstance) => {
  return {
    get: (url: string, config = {}) => withAbort(axios.get)(url, config),
    delete: (url: string, config = {}) => withAbort(axios.delete)(url, config),
    post: (url: string, body: unknown, config = {}) =>
      withAbort(axios.post)(url, body, config),
    put: (url: string, body: unknown, config = {}) =>
      withAbort(axios.put)(url, body, config),
    patch: (url: string, body: unknown, config = {}) =>
      withAbort(axios.patch)(url, body, config),
  };
};

export default api(axiosInstance);
