import { RoleUpdateManyWithoutUsersInput } from "./RoleUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  password?: string;
  roles?: RoleUpdateManyWithoutUsersInput;
  username?: string;
};
