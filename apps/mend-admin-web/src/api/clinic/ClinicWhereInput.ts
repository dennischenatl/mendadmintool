import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type ClinicWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
};
