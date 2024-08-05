import { User } from "../user/User";

export type UserClinic = {
  createdAt: Date;
  id: string;
  updatedAt: Date;
  user?: Array<User>;
};
