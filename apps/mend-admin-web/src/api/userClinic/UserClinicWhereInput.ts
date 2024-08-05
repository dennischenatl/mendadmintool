import { StringFilter } from "../../util/StringFilter";
import { UserListRelationFilter } from "../user/UserListRelationFilter";

export type UserClinicWhereInput = {
  id?: StringFilter;
  user?: UserListRelationFilter;
};
