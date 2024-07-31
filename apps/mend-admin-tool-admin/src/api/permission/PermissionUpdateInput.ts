import { RoleWhereUniqueInput } from "../role/RoleWhereUniqueInput";

export type PermissionUpdateInput = {
  clinicIds?: string | null;
  rolePermission?: RoleWhereUniqueInput | null;
};
