import { RoleWhereUniqueInput } from "../role/RoleWhereUniqueInput";

export type PermissionCreateInput = {
  clinicIds?: string | null;
  rolePermission?: RoleWhereUniqueInput | null;
};
