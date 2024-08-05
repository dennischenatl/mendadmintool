import { InputJsonValue } from "../../types";
import { UserClinicUpdateManyWithoutUsersInput } from "./UserClinicUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  password?: string;
  roles?: InputJsonValue;
  userClinics?: UserClinicUpdateManyWithoutUsersInput;
  username?: string;
};
