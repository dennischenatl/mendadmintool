import { UserClinic } from "../userClinic/UserClinic";

export type Clinic = {
  createdAt: Date;
  id: string;
  name: string | null;
  updatedAt: Date;
  userClinics?: Array<UserClinic>;
};
