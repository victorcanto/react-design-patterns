import { useCurrentUser } from "../../hooks/current-user.hook";
import { UserInfo } from "./user-info";

export const UserInfoWithCurrentUserHook = () => {
	const { user } = useCurrentUser();
	return <UserInfo user={user} />;
};
