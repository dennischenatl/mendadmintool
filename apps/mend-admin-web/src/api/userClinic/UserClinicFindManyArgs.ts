import { UserClinicWhereInput } from "./UserClinicWhereInput";
import { UserClinicOrderByInput } from "./UserClinicOrderByInput";

export type UserClinicFindManyArgs = {
  where?: UserClinicWhereInput;
  orderBy?: Array<UserClinicOrderByInput>;
  skip?: number;
  take?: number;
};
