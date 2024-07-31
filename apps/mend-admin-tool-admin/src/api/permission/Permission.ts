import { Role } from "../role/Role";

export type Permission = {
  clinicIds: string | null;
  createdAt: Date;
  id: string;
  rolePermission?: Role | null;
  updatedAt: Date;
};
