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
import { ClinicListRelationFilter } from "../../clinic/base/ClinicListRelationFilter";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";
import { StringFilter } from "../../util/StringFilter";
import { UserListRelationFilter } from "../../user/base/UserListRelationFilter";

@InputType()
class UserClinicWhereInput {
  @ApiProperty({
    required: false,
    type: () => ClinicListRelationFilter,
  })
  @ValidateNested()
  @Type(() => ClinicListRelationFilter)
  @IsOptional()
  @Field(() => ClinicListRelationFilter, {
    nullable: true,
  })
  clinic?: ClinicListRelationFilter;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  id?: StringFilter;

  @ApiProperty({
    required: false,
    type: () => UserListRelationFilter,
  })
  @ValidateNested()
  @Type(() => UserListRelationFilter)
  @IsOptional()
  @Field(() => UserListRelationFilter, {
    nullable: true,
  })
  user?: UserListRelationFilter;
}

export { UserClinicWhereInput as UserClinicWhereInput };
