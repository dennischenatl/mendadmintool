import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { CarePlanStatusResolverBase } from "./base/carePlanStatus.resolver.base";
import { CarePlanStatus } from "./base/CarePlanStatus";
import { CarePlanStatusService } from "./carePlanStatus.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => CarePlanStatus)
export class CarePlanStatusResolver extends CarePlanStatusResolverBase {
  constructor(
    protected readonly service: CarePlanStatusService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
