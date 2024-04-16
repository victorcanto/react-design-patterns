import { useState } from "react";
import { fetchUsers, useApiStatus } from "../../../api";
import { apiStatus } from "../../../constants/api-status";
import { withAsync } from "../../../helpers";

interface User {
  id: string;
  name: string;
  email: string;
}

export const useFetchUsers = () => {
  const [users, setUsers] = useState<User[]>([]);
  const {
    status: fetchUsersStatus,
    setStatus: setFetchUsersStatus,
    isIdle: isFetchUsersStatusIdle,
    isPending: isFetchUsersStatusPending,
    isSuccess: isFetchUsersStatusSuccess,
    isError: isFetchUsersStatusError,
  } = useApiStatus(apiStatus.IDLE);

  const initFetchUsers = async () => {
    setFetchUsersStatus(apiStatus.PENDING);
    const { response, error } = await withAsync<User[]>(() => fetchUsers());

    if (error) {
      setFetchUsersStatus(apiStatus.ERROR);
    } else if (response) {
      setFetchUsersStatus(apiStatus.SUCCESS);
      setUsers(response);
    }
  };

  return {
    users,
    fetchUsersStatus,
    isFetchUsersStatusIdle,
    isFetchUsersStatusPending,
    isFetchUsersStatusSuccess,
    isFetchUsersStatusError,
    initFetchUsers,
  };
};
