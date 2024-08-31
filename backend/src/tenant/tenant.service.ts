

import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { Tenant } from '@prisma/client';
import { CreateTenantDto } from './dto/CreateTenantDto';
import { UpdateTenantDto } from './dto/UpdateTenantDto';

@Injectable()
export class TenantService {
  constructor(private prisma: PrismaService) {}

  async createTenant(data: CreateTenantDto): Promise<Tenant> {
    return this.prisma.tenant.create({
      data,
    });
  }

  async getAllTenants(): Promise<Tenant[]> {
    return this.prisma.tenant.findMany();
  }

  async getTenantById(id: number): Promise<Tenant> {
    return this.prisma.tenant.findUnique({
      where: { id },
    });
  }

  async updateTenant(id: number, data: UpdateTenantDto): Promise<Tenant> {
    return this.prisma.tenant.update({
      where: { id },
      data,
    });
  }

  async deleteTenant(id: number): Promise<Tenant> {
    return this.prisma.tenant.delete({
      where: { id },
    });
  }
}
