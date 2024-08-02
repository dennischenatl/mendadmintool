/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ClinicWhereUniqueInput } from "../../clinic/base/ClinicWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class ClinicUpdateManyWithoutUserClinicsInput {
  @Field(() => [ClinicWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [ClinicWhereUniqueInput],
  })
  connect?: Array<ClinicWhereUniqueInput>;

  @Field(() => [ClinicWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [ClinicWhereUniqueInput],
  })
  disconnect?: Array<ClinicWhereUniqueInput>;

  @Field(() => [ClinicWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [ClinicWhereUniqueInput],
  })
  set?: Array<ClinicWhereUniqueInput>;
}

export { ClinicUpdateManyWithoutUserClinicsInput as ClinicUpdateManyWithoutUserClinicsInput };
