import { useResource } from "../../hooks/resource.hook";
import { User } from "../../interfaces/user";
import { UserInfo } from "./user-info";

interface UserInfoWithResourceHookProps {
	userId: string;
}

export const UserInfoWithResourceHook = ({
	userId,
}: UserInfoWithResourceHookProps) => {
	const { resource: user } = useResource<User>(`/users/${userId}`);
	return <UserInfo user={user} />;
};
