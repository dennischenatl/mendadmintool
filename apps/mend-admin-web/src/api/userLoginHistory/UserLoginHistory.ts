import { JsonValue } from "type-fest";

export type UserLoginHistory = {
  actions: JsonValue;
  createdAt: Date;
  id: string;
  updatedAt: Date;
  user: string | null;
};
