import { fetchUsers } from "../../../api";
import { useApi } from "../../../api/hooks/use-api";

interface User {
  id: string;
  name: string;
  email: string;
}

export const useFetchUsers = () => {
  const {
    data: users,
    status: fetchUsersStatus,
    exec: initFetchUsers,
    isIdle: isFetchUsersStatusIdle,
    isPending: isFetchUsersStatusPending,
    isSuccess: isFetchUsersStatusSuccess,
    isError: isFetchUsersStatusError,
  } = useApi<User[]>(() => fetchUsers().then((response) => response.data), {
    initialData: [],
  });

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
