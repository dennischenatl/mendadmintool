import { SampleEntityWhereInput } from "./SampleEntityWhereInput";
import { SampleEntityOrderByInput } from "./SampleEntityOrderByInput";

export type SampleEntityFindManyArgs = {
  where?: SampleEntityWhereInput;
  orderBy?: Array<SampleEntityOrderByInput>;
  skip?: number;
  take?: number;
};
