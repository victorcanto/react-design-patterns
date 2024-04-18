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

const withLogger = async (promise: Promise<any>) =>
  promise.catch((error) => {
    if (!process.env.REACT_APP_DEBUG_API) throw error;

    if (error.response) {
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
    } else if (error.request) {
      console.log(error.request);
    } else {
      console.log("Error", error.message);
    }
    console.log(error.config);
    throw error;
  });

const api = (axios: AxiosInstance) => {
  return {
    get: (url: string, config = {}) =>
      withLogger(withAbort(axios.get)(url, config)),
    delete: (url: string, config = {}) =>
      withLogger(withAbort(axios.delete)(url, config)),
    post: (url: string, body: unknown, config = {}) =>
      withLogger(withAbort(axios.post)(url, body, config)),
    put: (url: string, body: unknown, config = {}) =>
      withLogger(withAbort(axios.put)(url, body, config)),
    patch: (url: string, body: unknown, config = {}) =>
      withLogger(withAbort(axios.patch)(url, body, config)),
  };
};

export default api(axiosInstance);
