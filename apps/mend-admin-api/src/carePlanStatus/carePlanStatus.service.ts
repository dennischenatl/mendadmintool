import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CarePlanStatusServiceBase } from "./base/carePlanStatus.service.base";

@Injectable()
export class CarePlanStatusService extends CarePlanStatusServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
