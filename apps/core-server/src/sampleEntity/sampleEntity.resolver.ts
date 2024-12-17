import * as graphql from "@nestjs/graphql";
import { SampleEntityResolverBase } from "./base/sampleEntity.resolver.base";
import { SampleEntity } from "./base/SampleEntity";
import { SampleEntityService } from "./sampleEntity.service";

@graphql.Resolver(() => SampleEntity)
export class SampleEntityResolver extends SampleEntityResolverBase {
  constructor(protected readonly service: SampleEntityService) {
    super(service);
  }
}
