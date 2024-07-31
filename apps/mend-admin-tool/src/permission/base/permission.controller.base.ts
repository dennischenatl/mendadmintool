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
import { PermissionService } from "../permission.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { PermissionCreateInput } from "./PermissionCreateInput";
import { Permission } from "./Permission";
import { PermissionFindManyArgs } from "./PermissionFindManyArgs";
import { PermissionWhereUniqueInput } from "./PermissionWhereUniqueInput";
import { PermissionUpdateInput } from "./PermissionUpdateInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class PermissionControllerBase {
  constructor(
    protected readonly service: PermissionService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Permission })
  @nestAccessControl.UseRoles({
    resource: "Permission",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createPermission(
    @common.Body() data: PermissionCreateInput
  ): Promise<Permission> {
    return await this.service.createPermission({
      data: {
        ...data,

        rolePermission: data.rolePermission
          ? {
              connect: data.rolePermission,
            }
          : undefined,
      },
      select: {
        clinicIds: true,
        createdAt: true,
        id: true,

        rolePermission: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Permission] })
  @ApiNestedQuery(PermissionFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Permission",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async permissions(@common.Req() request: Request): Promise<Permission[]> {
    const args = plainToClass(PermissionFindManyArgs, request.query);
    return this.service.permissions({
      ...args,
      select: {
        clinicIds: true,
        createdAt: true,
        id: true,

        rolePermission: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Permission })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Permission",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async permission(
    @common.Param() params: PermissionWhereUniqueInput
  ): Promise<Permission | null> {
    const result = await this.service.permission({
      where: params,
      select: {
        clinicIds: true,
        createdAt: true,
        id: true,

        rolePermission: {
          select: {
            id: true,
          },
        },

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
  @swagger.ApiOkResponse({ type: Permission })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Permission",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updatePermission(
    @common.Param() params: PermissionWhereUniqueInput,
    @common.Body() data: PermissionUpdateInput
  ): Promise<Permission | null> {
    try {
      return await this.service.updatePermission({
        where: params,
        data: {
          ...data,

          rolePermission: data.rolePermission
            ? {
                connect: data.rolePermission,
              }
            : undefined,
        },
        select: {
          clinicIds: true,
          createdAt: true,
          id: true,

          rolePermission: {
            select: {
              id: true,
            },
          },

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
  @swagger.ApiOkResponse({ type: Permission })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Permission",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deletePermission(
    @common.Param() params: PermissionWhereUniqueInput
  ): Promise<Permission | null> {
    try {
      return await this.service.deletePermission({
        where: params,
        select: {
          clinicIds: true,
          createdAt: true,
          id: true,

          rolePermission: {
            select: {
              id: true,
            },
          },

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
