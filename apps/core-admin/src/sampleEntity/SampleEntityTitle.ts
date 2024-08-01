import { SampleEntity as TSampleEntity } from "../api/sampleEntity/SampleEntity";

export const SAMPLEENTITY_TITLE_FIELD = "name";

export const SampleEntityTitle = (record: TSampleEntity): string => {
  return record.name?.toString() || String(record.id);
};
