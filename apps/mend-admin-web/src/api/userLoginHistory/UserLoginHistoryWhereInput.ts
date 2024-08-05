import { JsonFilter } from "../../util/JsonFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type UserLoginHistoryWhereInput = {
  actions?: JsonFilter;
  id?: StringFilter;
  user?: StringNullableFilter;
};
