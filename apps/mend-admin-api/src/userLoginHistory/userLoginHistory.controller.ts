import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { UserLoginHistoryService } from "./userLoginHistory.service";
import { UserLoginHistoryControllerBase } from "./base/userLoginHistory.controller.base";

@swagger.ApiTags("userLoginHistories")
@common.Controller("userLoginHistories")
export class UserLoginHistoryController extends UserLoginHistoryControllerBase {
  constructor(
    protected readonly service: UserLoginHistoryService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
