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
import { SampleEntityWhereUniqueInput } from "./SampleEntityWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { SampleEntityUpdateInput } from "./SampleEntityUpdateInput";

@ArgsType()
class UpdateSampleEntityArgs {
  @ApiProperty({
    required: true,
    type: () => SampleEntityWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => SampleEntityWhereUniqueInput)
  @Field(() => SampleEntityWhereUniqueInput, { nullable: false })
  where!: SampleEntityWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => SampleEntityUpdateInput,
  })
  @ValidateNested()
  @Type(() => SampleEntityUpdateInput)
  @Field(() => SampleEntityUpdateInput, { nullable: false })
  data!: SampleEntityUpdateInput;
}

export { UpdateSampleEntityArgs as UpdateSampleEntityArgs };
