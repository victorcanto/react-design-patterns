import { useState } from "react";
import { useApiStatus } from "./use-api-status";
import { ERROR, PENDING, SUCCESS } from "../../constants/api-status";

type Fn<T> = (...args: unknown[]) => Promise<T>;
interface Config<T> {
  initialData: T | (() => T);
} 

export const useApi = <T>(fn: Fn<T>, config: Config<T>) => {
  const { initialData } = config;
  const [data, setData] = useState<T>(initialData);
  const [error, setError] = useState<Error | null>(null);
  const { status, setStatus, ...normalizedStatuses } = useApiStatus();

  const exec = async (...args: unknown[]) => {
    try {
      setStatus(PENDING);
      const data = await fn(...args);
      setData(data);
      setStatus(SUCCESS);
      return {
        data,
        error: null,
      };
    } catch (error) {
      setError(error as Error);
      setStatus(ERROR);
      return {
        error,
        data: null,
      };
    }
  };

  return {
    data,
    setData,
    status,
    setStatus,
    error,
    exec,
    ...normalizedStatuses,
  };
};
