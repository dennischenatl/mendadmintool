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
import { CarePlanStatusWhereInput } from "./CarePlanStatusWhereInput";
import { Type } from "class-transformer";

@ArgsType()
class CarePlanStatusCountArgs {
  @ApiProperty({
    required: false,
    type: () => CarePlanStatusWhereInput,
  })
  @Field(() => CarePlanStatusWhereInput, { nullable: true })
  @Type(() => CarePlanStatusWhereInput)
  where?: CarePlanStatusWhereInput;
}

export { CarePlanStatusCountArgs as CarePlanStatusCountArgs };
