import { Module } from "@nestjs/common";
import { SampleEntityModuleBase } from "./base/sampleEntity.module.base";
import { SampleEntityService } from "./sampleEntity.service";
import { SampleEntityController } from "./sampleEntity.controller";
import { SampleEntityResolver } from "./sampleEntity.resolver";

@Module({
  imports: [SampleEntityModuleBase],
  controllers: [SampleEntityController],
  providers: [SampleEntityService, SampleEntityResolver],
  exports: [SampleEntityService],
})
export class SampleEntityModule {}
