import { CarePlanStatusWhereInput } from "./CarePlanStatusWhereInput";
import { CarePlanStatusOrderByInput } from "./CarePlanStatusOrderByInput";

export type CarePlanStatusFindManyArgs = {
  where?: CarePlanStatusWhereInput;
  orderBy?: Array<CarePlanStatusOrderByInput>;
  skip?: number;
  take?: number;
};
