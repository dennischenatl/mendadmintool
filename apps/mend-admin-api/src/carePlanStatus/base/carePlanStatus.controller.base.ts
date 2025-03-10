/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { CarePlanStatusService } from "../carePlanStatus.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { CarePlanStatusCreateInput } from "./CarePlanStatusCreateInput";
import { CarePlanStatus } from "./CarePlanStatus";
import { CarePlanStatusFindManyArgs } from "./CarePlanStatusFindManyArgs";
import { CarePlanStatusWhereUniqueInput } from "./CarePlanStatusWhereUniqueInput";
import { CarePlanStatusUpdateInput } from "./CarePlanStatusUpdateInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class CarePlanStatusControllerBase {
  constructor(
    protected readonly service: CarePlanStatusService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: CarePlanStatus })
  @nestAccessControl.UseRoles({
    resource: "CarePlanStatus",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createCarePlanStatus(
    @common.Body() data: CarePlanStatusCreateInput
  ): Promise<CarePlanStatus> {
    return await this.service.createCarePlanStatus({
      data: data,
      select: {
        createdAt: true,
        id: true,
        name: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [CarePlanStatus] })
  @ApiNestedQuery(CarePlanStatusFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "CarePlanStatus",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async carePlanStatuses(
    @common.Req() request: Request
  ): Promise<CarePlanStatus[]> {
    const args = plainToClass(CarePlanStatusFindManyArgs, request.query);
    return this.service.carePlanStatuses({
      ...args,
      select: {
        createdAt: true,
        id: true,
        name: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: CarePlanStatus })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "CarePlanStatus",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async carePlanStatus(
    @common.Param() params: CarePlanStatusWhereUniqueInput
  ): Promise<CarePlanStatus | null> {
    const result = await this.service.carePlanStatus({
      where: params,
      select: {
        createdAt: true,
        id: true,
        name: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: CarePlanStatus })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "CarePlanStatus",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateCarePlanStatus(
    @common.Param() params: CarePlanStatusWhereUniqueInput,
    @common.Body() data: CarePlanStatusUpdateInput
  ): Promise<CarePlanStatus | null> {
    try {
      return await this.service.updateCarePlanStatus({
        where: params,
        data: data,
        select: {
          createdAt: true,
          id: true,
          name: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: CarePlanStatus })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "CarePlanStatus",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteCarePlanStatus(
    @common.Param() params: CarePlanStatusWhereUniqueInput
  ): Promise<CarePlanStatus | null> {
    try {
      return await this.service.deleteCarePlanStatus({
        where: params,
        select: {
          createdAt: true,
          id: true,
          name: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
