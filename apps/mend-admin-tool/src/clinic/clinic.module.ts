import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ClinicModuleBase } from "./base/clinic.module.base";
import { ClinicService } from "./clinic.service";
import { ClinicController } from "./clinic.controller";
import { ClinicResolver } from "./clinic.resolver";

@Module({
  imports: [ClinicModuleBase, forwardRef(() => AuthModule)],
  controllers: [ClinicController],
  providers: [ClinicService, ClinicResolver],
  exports: [ClinicService],
})
export class ClinicModule {}
