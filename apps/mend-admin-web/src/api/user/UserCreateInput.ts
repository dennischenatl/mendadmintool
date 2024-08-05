import { InputJsonValue } from "../../types";
import { UserClinicCreateNestedManyWithoutUsersInput } from "./UserClinicCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  password: string;
  roles: InputJsonValue;
  userClinics?: UserClinicCreateNestedManyWithoutUsersInput;
  username: string;
};
