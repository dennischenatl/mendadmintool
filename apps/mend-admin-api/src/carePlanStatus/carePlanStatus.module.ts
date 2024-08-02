import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { CarePlanStatusModuleBase } from "./base/carePlanStatus.module.base";
import { CarePlanStatusService } from "./carePlanStatus.service";
import { CarePlanStatusController } from "./carePlanStatus.controller";
import { CarePlanStatusResolver } from "./carePlanStatus.resolver";

@Module({
  imports: [CarePlanStatusModuleBase, forwardRef(() => AuthModule)],
  controllers: [CarePlanStatusController],
  providers: [CarePlanStatusService, CarePlanStatusResolver],
  exports: [CarePlanStatusService],
})
export class CarePlanStatusModule {}
