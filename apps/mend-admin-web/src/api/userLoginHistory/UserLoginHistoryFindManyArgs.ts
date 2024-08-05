import { UserLoginHistoryWhereInput } from "./UserLoginHistoryWhereInput";
import { UserLoginHistoryOrderByInput } from "./UserLoginHistoryOrderByInput";

export type UserLoginHistoryFindManyArgs = {
  where?: UserLoginHistoryWhereInput;
  orderBy?: Array<UserLoginHistoryOrderByInput>;
  skip?: number;
  take?: number;
};
