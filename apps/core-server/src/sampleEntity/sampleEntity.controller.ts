import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { SampleEntityService } from "./sampleEntity.service";
import { SampleEntityControllerBase } from "./base/sampleEntity.controller.base";

@swagger.ApiTags("sampleEntities")
@common.Controller("sampleEntities")
export class SampleEntityController extends SampleEntityControllerBase {
  constructor(protected readonly service: SampleEntityService) {
    super(service);
  }
}
