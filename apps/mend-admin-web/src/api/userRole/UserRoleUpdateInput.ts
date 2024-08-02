import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type UserRoleUpdateInput = {
  name?: string | null;
  user?: UserWhereUniqueInput | null;
};
