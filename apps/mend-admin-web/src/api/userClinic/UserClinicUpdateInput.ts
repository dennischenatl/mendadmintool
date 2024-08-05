import { ClinicUpdateManyWithoutUserClinicsInput } from "./ClinicUpdateManyWithoutUserClinicsInput";
import { UserUpdateManyWithoutUserClinicsInput } from "./UserUpdateManyWithoutUserClinicsInput";

export type UserClinicUpdateInput = {
  clinic?: ClinicUpdateManyWithoutUserClinicsInput;
  user?: UserUpdateManyWithoutUserClinicsInput;
};
