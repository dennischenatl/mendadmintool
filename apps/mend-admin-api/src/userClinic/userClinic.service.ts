import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { UserClinicServiceBase } from "./base/userClinic.service.base";

@Injectable()
export class UserClinicService extends UserClinicServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
