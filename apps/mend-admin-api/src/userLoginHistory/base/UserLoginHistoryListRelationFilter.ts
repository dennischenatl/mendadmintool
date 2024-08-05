/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { UserLoginHistoryWhereInput } from "./UserLoginHistoryWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class UserLoginHistoryListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => UserLoginHistoryWhereInput,
  })
  @ValidateNested()
  @Type(() => UserLoginHistoryWhereInput)
  @IsOptional()
  @Field(() => UserLoginHistoryWhereInput, {
    nullable: true,
  })
  every?: UserLoginHistoryWhereInput;

  @ApiProperty({
    required: false,
    type: () => UserLoginHistoryWhereInput,
  })
  @ValidateNested()
  @Type(() => UserLoginHistoryWhereInput)
  @IsOptional()
  @Field(() => UserLoginHistoryWhereInput, {
    nullable: true,
  })
  some?: UserLoginHistoryWhereInput;

  @ApiProperty({
    required: false,
    type: () => UserLoginHistoryWhereInput,
  })
  @ValidateNested()
  @Type(() => UserLoginHistoryWhereInput)
  @IsOptional()
  @Field(() => UserLoginHistoryWhereInput, {
    nullable: true,
  })
  none?: UserLoginHistoryWhereInput;
}
export { UserLoginHistoryListRelationFilter as UserLoginHistoryListRelationFilter };
