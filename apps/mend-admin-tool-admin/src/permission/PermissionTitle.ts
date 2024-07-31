import { Permission as TPermission } from "../api/permission/Permission";

export const PERMISSION_TITLE_FIELD = "clinicIds";

export const PermissionTitle = (record: TPermission): string => {
  return record.clinicIds?.toString() || String(record.id);
};
