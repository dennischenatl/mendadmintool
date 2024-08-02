import { JsonValue } from "type-fest";
import { UserClinic } from "../userClinic/UserClinic";
import { UserRole } from "../userRole/UserRole";

export type User = {
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  roles: JsonValue;
  updatedAt: Date;
  userClinics?: Array<UserClinic>;
  userRoles?: Array<UserRole>;
  username: string;
};
