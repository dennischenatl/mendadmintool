/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { TestEntity } from "./TestEntity";
import { TestEntityCountArgs } from "./TestEntityCountArgs";
import { TestEntityFindManyArgs } from "./TestEntityFindManyArgs";
import { TestEntityFindUniqueArgs } from "./TestEntityFindUniqueArgs";
import { DeleteTestEntityArgs } from "./DeleteTestEntityArgs";
import { TestEntityService } from "../testEntity.service";
@graphql.Resolver(() => TestEntity)
export class TestEntityResolverBase {
  constructor(protected readonly service: TestEntityService) {}

  async _testEntitiesMeta(
    @graphql.Args() args: TestEntityCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [TestEntity])
  async testEntities(
    @graphql.Args() args: TestEntityFindManyArgs
  ): Promise<TestEntity[]> {
    return this.service.testEntities(args);
  }

  @graphql.Query(() => TestEntity, { nullable: true })
  async testEntity(
    @graphql.Args() args: TestEntityFindUniqueArgs
  ): Promise<TestEntity | null> {
    const result = await this.service.testEntity(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => TestEntity)
  async deleteTestEntity(
    @graphql.Args() args: DeleteTestEntityArgs
  ): Promise<TestEntity | null> {
    try {
      return await this.service.deleteTestEntity(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}
