import { SortOrder } from "../../util/SortOrder";

export type PermissionOrderByInput = {
  clinicIds?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  rolePermissionId?: SortOrder;
  updatedAt?: SortOrder;
};
