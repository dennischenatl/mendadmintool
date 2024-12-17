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
import { SampleEntityService } from "../sampleEntity.service";
import { SampleEntityCreateInput } from "./SampleEntityCreateInput";
import { SampleEntity } from "./SampleEntity";
import { SampleEntityFindManyArgs } from "./SampleEntityFindManyArgs";
import { SampleEntityWhereUniqueInput } from "./SampleEntityWhereUniqueInput";
import { SampleEntityUpdateInput } from "./SampleEntityUpdateInput";

export class SampleEntityControllerBase {
  constructor(protected readonly service: SampleEntityService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: SampleEntity })
  async createSampleEntity(
    @common.Body() data: SampleEntityCreateInput
  ): Promise<SampleEntity> {
    return await this.service.createSampleEntity({
      data: data,
      select: {
        createdAt: true,
        description: true,
        id: true,
        isActive: true,
        name: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [SampleEntity] })
  @ApiNestedQuery(SampleEntityFindManyArgs)
  async sampleEntities(
    @common.Req() request: Request
  ): Promise<SampleEntity[]> {
    const args = plainToClass(SampleEntityFindManyArgs, request.query);
    return this.service.sampleEntities({
      ...args,
      select: {
        createdAt: true,
        description: true,
        id: true,
        isActive: true,
        name: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: SampleEntity })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async sampleEntity(
    @common.Param() params: SampleEntityWhereUniqueInput
  ): Promise<SampleEntity | null> {
    const result = await this.service.sampleEntity({
      where: params,
      select: {
        createdAt: true,
        description: true,
        id: true,
        isActive: true,
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

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: SampleEntity })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateSampleEntity(
    @common.Param() params: SampleEntityWhereUniqueInput,
    @common.Body() data: SampleEntityUpdateInput
  ): Promise<SampleEntity | null> {
    try {
      return await this.service.updateSampleEntity({
        where: params,
        data: data,
        select: {
          createdAt: true,
          description: true,
          id: true,
          isActive: true,
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
  @swagger.ApiOkResponse({ type: SampleEntity })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteSampleEntity(
    @common.Param() params: SampleEntityWhereUniqueInput
  ): Promise<SampleEntity | null> {
    try {
      return await this.service.deleteSampleEntity({
        where: params,
        select: {
          createdAt: true,
          description: true,
          id: true,
          isActive: true,
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
