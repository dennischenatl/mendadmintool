import { IntFilter } from "../../util/IntFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type CarePlanStatusWhereInput = {
  id?: IntFilter;
  name?: StringNullableFilter;
};
