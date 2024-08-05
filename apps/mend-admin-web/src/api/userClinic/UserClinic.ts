import { Clinic } from "../clinic/Clinic";
import { User } from "../user/User";

export type UserClinic = {
  clinic?: Array<Clinic>;
  createdAt: Date;
  id: string;
  updatedAt: Date;
  user?: Array<User>;
};
