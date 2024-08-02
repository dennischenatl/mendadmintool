import { InputJsonValue } from "../../types";
import { UserClinicUpdateManyWithoutUsersInput } from "./UserClinicUpdateManyWithoutUsersInput";
import { UserRoleUpdateManyWithoutUsersInput } from "./UserRoleUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  password?: string;
  roles?: InputJsonValue;
  userClinics?: UserClinicUpdateManyWithoutUsersInput;
  userRoles?: UserRoleUpdateManyWithoutUsersInput;
  username?: string;
};
