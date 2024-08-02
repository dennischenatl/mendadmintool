import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { UserClinicService } from "./userClinic.service";
import { UserClinicControllerBase } from "./base/userClinic.controller.base";

@swagger.ApiTags("userClinics")
@common.Controller("userClinics")
export class UserClinicController extends UserClinicControllerBase {
  constructor(
    protected readonly service: UserClinicService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
