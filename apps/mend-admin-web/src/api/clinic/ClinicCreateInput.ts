import { UserClinicCreateNestedManyWithoutClinicsInput } from "./UserClinicCreateNestedManyWithoutClinicsInput";

export type ClinicCreateInput = {
  name?: string | null;
  userClinics?: UserClinicCreateNestedManyWithoutClinicsInput;
};
