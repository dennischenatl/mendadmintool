import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type UserRoleCreateInput = {
  name?: string | null;
  user?: UserWhereUniqueInput | null;
};
