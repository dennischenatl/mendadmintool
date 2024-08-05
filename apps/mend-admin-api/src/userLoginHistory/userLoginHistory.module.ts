import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { UserLoginHistoryModuleBase } from "./base/userLoginHistory.module.base";
import { UserLoginHistoryService } from "./userLoginHistory.service";
import { UserLoginHistoryController } from "./userLoginHistory.controller";
import { UserLoginHistoryResolver } from "./userLoginHistory.resolver";

@Module({
  imports: [UserLoginHistoryModuleBase, forwardRef(() => AuthModule)],
  controllers: [UserLoginHistoryController],
  providers: [UserLoginHistoryService, UserLoginHistoryResolver],
  exports: [UserLoginHistoryService],
})
export class UserLoginHistoryModule {}
