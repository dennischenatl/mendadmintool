import { PermissionCreateNestedManyWithoutRolesInput } from "./PermissionCreateNestedManyWithoutRolesInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type RoleCreateInput = {
  name?: string | null;
  permission?: PermissionCreateNestedManyWithoutRolesInput;
  userRoles?: UserWhereUniqueInput | null;
};
