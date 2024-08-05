import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { UserLoginHistoryResolverBase } from "./base/userLoginHistory.resolver.base";
import { UserLoginHistory } from "./base/UserLoginHistory";
import { UserLoginHistoryService } from "./userLoginHistory.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => UserLoginHistory)
export class UserLoginHistoryResolver extends UserLoginHistoryResolverBase {
  constructor(
    protected readonly service: UserLoginHistoryService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
