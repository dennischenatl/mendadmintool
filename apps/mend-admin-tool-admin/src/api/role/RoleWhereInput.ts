import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { PermissionListRelationFilter } from "../permission/PermissionListRelationFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type RoleWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  permission?: PermissionListRelationFilter;
  userRoles?: UserWhereUniqueInput;
};
