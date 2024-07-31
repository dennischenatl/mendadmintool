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
  Role as PrismaRole,
  Permission as PrismaPermission,
  User as PrismaUser,
} from "@prisma/client";

export class RoleServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.RoleCountArgs, "select">): Promise<number> {
    return this.prisma.role.count(args);
  }

  async roles(args: Prisma.RoleFindManyArgs): Promise<PrismaRole[]> {
    return this.prisma.role.findMany(args);
  }
  async role(args: Prisma.RoleFindUniqueArgs): Promise<PrismaRole | null> {
    return this.prisma.role.findUnique(args);
  }
  async createRole(args: Prisma.RoleCreateArgs): Promise<PrismaRole> {
    return this.prisma.role.create(args);
  }
  async updateRole(args: Prisma.RoleUpdateArgs): Promise<PrismaRole> {
    return this.prisma.role.update(args);
  }
  async deleteRole(args: Prisma.RoleDeleteArgs): Promise<PrismaRole> {
    return this.prisma.role.delete(args);
  }

  async findPermission(
    parentId: string,
    args: Prisma.PermissionFindManyArgs
  ): Promise<PrismaPermission[]> {
    return this.prisma.role
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .permission(args);
  }

  async getUserRoles(parentId: string): Promise<PrismaUser | null> {
    return this.prisma.role
      .findUnique({
        where: { id: parentId },
      })
      .userRoles();
  }
}
