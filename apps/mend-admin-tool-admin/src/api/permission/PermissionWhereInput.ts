import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { RoleWhereUniqueInput } from "../role/RoleWhereUniqueInput";

export type PermissionWhereInput = {
  clinicIds?: StringNullableFilter;
  id?: StringFilter;
  rolePermission?: RoleWhereUniqueInput;
};
