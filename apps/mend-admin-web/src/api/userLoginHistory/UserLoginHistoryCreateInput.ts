import { InputJsonValue } from "../../types";

export type UserLoginHistoryCreateInput = {
  actions?: InputJsonValue;
  user?: string | null;
};
