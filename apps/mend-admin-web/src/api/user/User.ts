import { JsonValue } from "type-fest";
import { UserClinic } from "../userClinic/UserClinic";

export type User = {
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  roles: JsonValue;
  updatedAt: Date;
  userClinics?: Array<UserClinic>;
  username: string;
};
