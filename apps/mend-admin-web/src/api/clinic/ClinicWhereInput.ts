import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UserClinicListRelationFilter } from "../userClinic/UserClinicListRelationFilter";

export type ClinicWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  userClinics?: UserClinicListRelationFilter;
};
