import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { UserLoginHistoryServiceBase } from "./base/userLoginHistory.service.base";

@Injectable()
export class UserLoginHistoryService extends UserLoginHistoryServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
