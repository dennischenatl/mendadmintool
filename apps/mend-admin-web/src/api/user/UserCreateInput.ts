import { InputJsonValue } from "../../types";
import { UserClinicCreateNestedManyWithoutUsersInput } from "./UserClinicCreateNestedManyWithoutUsersInput";
import { UserRoleCreateNestedManyWithoutUsersInput } from "./UserRoleCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  password: string;
  roles: InputJsonValue;
  userClinics?: UserClinicCreateNestedManyWithoutUsersInput;
  userRoles?: UserRoleCreateNestedManyWithoutUsersInput;
  username: string;
};
