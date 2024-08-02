import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { UserClinicModuleBase } from "./base/userClinic.module.base";
import { UserClinicService } from "./userClinic.service";
import { UserClinicController } from "./userClinic.controller";
import { UserClinicResolver } from "./userClinic.resolver";

@Module({
  imports: [UserClinicModuleBase, forwardRef(() => AuthModule)],
  controllers: [UserClinicController],
  providers: [UserClinicService, UserClinicResolver],
  exports: [UserClinicService],
})
export class UserClinicModule {}
