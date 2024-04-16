import { useMemo, useState } from "react";
import { IDLE, defaultApiStatuses } from "../../constants/api-status";
import { capitalize } from "../../helpers";

export interface Statuses {
  isIdle: boolean;
  isPending: boolean;
  isSuccess: boolean;
  isError: boolean;
}

const prepareStatuses = (currentStatus: string): Statuses => {
  const statuses: Statuses = {
    isIdle: false,
    isPending: false,
    isSuccess: false,
    isError: false,
  };
  for (const status of defaultApiStatuses) {
    const normalizedStatus = capitalize(status.toLowerCase());
    const normalisedStatusKey = `is${normalizedStatus}` as keyof Statuses;
    statuses[normalisedStatusKey] = status === currentStatus;
  }
  return statuses;
};

export const useApiStatus = (
  currentStatus: string = IDLE
): Statuses & {
  status: string;
  setStatus: React.Dispatch<React.SetStateAction<string>>;
} => {
  const [status, setStatus] = useState(currentStatus);
  const statuses = useMemo(() => prepareStatuses(status), [status]);

  return {
    status,
    setStatus,
    ...statuses,
  };
};
