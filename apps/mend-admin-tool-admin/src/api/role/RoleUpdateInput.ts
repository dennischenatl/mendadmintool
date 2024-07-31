import { PermissionUpdateManyWithoutRolesInput } from "./PermissionUpdateManyWithoutRolesInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type RoleUpdateInput = {
  name?: string | null;
  permission?: PermissionUpdateManyWithoutRolesInput;
  userRoles?: UserWhereUniqueInput | null;
};
