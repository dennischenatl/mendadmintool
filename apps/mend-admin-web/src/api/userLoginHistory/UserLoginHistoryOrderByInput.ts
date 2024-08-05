import { SortOrder } from "../../util/SortOrder";

export type UserLoginHistoryOrderByInput = {
  actions?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
  user?: SortOrder;
};
