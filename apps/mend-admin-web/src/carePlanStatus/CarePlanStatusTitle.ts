import { CarePlanStatus as TCarePlanStatus } from "../api/carePlanStatus/CarePlanStatus";

export const CAREPLANSTATUS_TITLE_FIELD = "name";

export const CarePlanStatusTitle = (record: TCarePlanStatus): string => {
  return record.name?.toString() || String(record.id);
};
