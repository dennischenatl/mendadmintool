import { UserClinic as TUserClinic } from "../api/userClinic/UserClinic";

export const USERCLINIC_TITLE_FIELD = "id";

export const UserClinicTitle = (record: TUserClinic): string => {
  return record.id?.toString() || String(record.id);
};
