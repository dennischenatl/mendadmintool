import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { CarePlanStatusService } from "./carePlanStatus.service";
import { CarePlanStatusControllerBase } from "./base/carePlanStatus.controller.base";

@swagger.ApiTags("carePlanStatuses")
@common.Controller("carePlanStatuses")
export class CarePlanStatusController extends CarePlanStatusControllerBase {
  constructor(
    protected readonly service: CarePlanStatusService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
