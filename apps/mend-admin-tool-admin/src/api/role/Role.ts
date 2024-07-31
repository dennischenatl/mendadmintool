import { Permission } from "../permission/Permission";
import { User } from "../user/User";

export type Role = {
  createdAt: Date;
  id: string;
  name: string | null;
  permission?: Array<Permission>;
  updatedAt: Date;
  userRoles?: User | null;
};
