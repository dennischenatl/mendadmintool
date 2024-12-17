/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { SampleEntityWhereInput } from "./SampleEntityWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { SampleEntityOrderByInput } from "./SampleEntityOrderByInput";

@ArgsType()
class SampleEntityFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => SampleEntityWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => SampleEntityWhereInput, { nullable: true })
  @Type(() => SampleEntityWhereInput)
  where?: SampleEntityWhereInput;

  @ApiProperty({
    required: false,
    type: [SampleEntityOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [SampleEntityOrderByInput], { nullable: true })
  @Type(() => SampleEntityOrderByInput)
  orderBy?: Array<SampleEntityOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { SampleEntityFindManyArgs as SampleEntityFindManyArgs };
