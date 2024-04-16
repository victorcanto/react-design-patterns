import { useUser } from "../../hooks/user.hook";
import { UserInfo } from "./user-info";

interface UserInfoByIdWithUserHookProps {
	userId: string;
}

export const UserInfoByIdWithUserHook = ({
	userId,
}: UserInfoByIdWithUserHookProps) => {
	const { user } = useUser(userId);
	return <UserInfo user={user} />;
};
