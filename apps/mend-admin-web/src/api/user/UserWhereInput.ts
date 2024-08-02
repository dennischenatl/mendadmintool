import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { UserClinicListRelationFilter } from "../userClinic/UserClinicListRelationFilter";
import { UserRoleListRelationFilter } from "../userRole/UserRoleListRelationFilter";

export type UserWhereInput = {
  email?: StringNullableFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  userClinics?: UserClinicListRelationFilter;
  userRoles?: UserRoleListRelationFilter;
  username?: StringFilter;
};
