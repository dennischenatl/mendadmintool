import { ClinicListRelationFilter } from "../clinic/ClinicListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { UserListRelationFilter } from "../user/UserListRelationFilter";

export type UserClinicWhereInput = {
  clinic?: ClinicListRelationFilter;
  id?: StringFilter;
  user?: UserListRelationFilter;
};
