import { useCallback } from "react";
import { getUserById } from "../../actions";
import { useDataSource } from "../../hooks/data-source.hook";

import { User } from "../../interfaces/user";
import { UserInfo } from "./user-info";

interface UserInfoWithDataSourceHookProps {
	userId: string;
}

export const UserInfoWithDataSourceHook = ({
	userId,
}: UserInfoWithDataSourceHookProps) => {
	const getData = useCallback(async () => await getUserById(userId), [userId]);
	const { data: user } = useDataSource<User>(getData);
	return <UserInfo user={user} />;
};
