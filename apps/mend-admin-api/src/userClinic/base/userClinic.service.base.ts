/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";

import {
  Prisma,
  UserClinic as PrismaUserClinic,
  Clinic as PrismaClinic,
  User as PrismaUser,
} from "@prisma/client";

export class UserClinicServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.UserClinicCountArgs, "select">
  ): Promise<number> {
    return this.prisma.userClinic.count(args);
  }

  async userClinics(
    args: Prisma.UserClinicFindManyArgs
  ): Promise<PrismaUserClinic[]> {
    return this.prisma.userClinic.findMany(args);
  }
  async userClinic(
    args: Prisma.UserClinicFindUniqueArgs
  ): Promise<PrismaUserClinic | null> {
    return this.prisma.userClinic.findUnique(args);
  }
  async createUserClinic(
    args: Prisma.UserClinicCreateArgs
  ): Promise<PrismaUserClinic> {
    return this.prisma.userClinic.create(args);
  }
  async updateUserClinic(
    args: Prisma.UserClinicUpdateArgs
  ): Promise<PrismaUserClinic> {
    return this.prisma.userClinic.update(args);
  }
  async deleteUserClinic(
    args: Prisma.UserClinicDeleteArgs
  ): Promise<PrismaUserClinic> {
    return this.prisma.userClinic.delete(args);
  }

  async findClinic(
    parentId: string,
    args: Prisma.ClinicFindManyArgs
  ): Promise<PrismaClinic[]> {
    return this.prisma.userClinic
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .clinic(args);
  }

  async findUser(
    parentId: string,
    args: Prisma.UserFindManyArgs
  ): Promise<PrismaUser[]> {
    return this.prisma.userClinic
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .user(args);
  }
}
