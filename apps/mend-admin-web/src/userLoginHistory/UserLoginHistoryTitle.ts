import { UserLoginHistory as TUserLoginHistory } from "../api/userLoginHistory/UserLoginHistory";

export const USERLOGINHISTORY_TITLE_FIELD = "user";

export const UserLoginHistoryTitle = (record: TUserLoginHistory): string => {
  return record.user?.toString() || String(record.id);
};
