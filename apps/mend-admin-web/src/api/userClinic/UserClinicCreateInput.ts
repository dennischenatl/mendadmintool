import { ClinicCreateNestedManyWithoutUserClinicsInput } from "./ClinicCreateNestedManyWithoutUserClinicsInput";
import { UserCreateNestedManyWithoutUserClinicsInput } from "./UserCreateNestedManyWithoutUserClinicsInput";

export type UserClinicCreateInput = {
  clinic?: ClinicCreateNestedManyWithoutUserClinicsInput;
  user?: UserCreateNestedManyWithoutUserClinicsInput;
};
