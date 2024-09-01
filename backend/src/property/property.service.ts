
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { Property, Prisma } from '@prisma/client';
import { CreateTenantDto } from 'src/tenant/dto/CreateTenantDto';
import { UpdateTenantDto } from 'src/tenant/dto/UpdateTenantDto';

@Injectable()
export class PropertyService {
  constructor(private prisma: PrismaService) {}

  async create(data: Prisma.PropertyCreateInput): Promise<Property> {
    return this.prisma.property.create({ data });
  }

  async findAll(): Promise<Property[]> {
    return this.prisma.property.findMany();
  }

  async findOne(id: number): Promise<Property | null> {
    return this.prisma.property.findUnique({ where: { id } });
  }

  async update(id: number, data: Prisma.PropertyUpdateInput): Promise<Property> {
    return this.prisma.property.update({ where: { id }, data });
  }

  async remove(id: number): Promise<Property> {
    return this.prisma.property.delete({ where: { id } });
  }

  //tenet management
  async addTenant(propertyId: number, tenantData: CreateTenantDto): Promise<Property> {
    return this.prisma.property.update({
      where: { id: propertyId },
      data: {
        tenants: {
          create: tenantData,
        },
      },
      include: {
        tenants: true, // Include tenants in the response
      },
    });
  }
  
  async removeTenant(propertyId: number, tenantId: number): Promise<Property> {
    return this.prisma.property.update({
      where: { id: propertyId },
      data: {
        tenants: {
          delete: { id: tenantId },
        },
      },
      include: {
        tenants: true, // Include tenants in the response
      },
    });
  }
  async updateTenant(propertyId: number, tenantId: number, tenantData: UpdateTenantDto): Promise<Property> {
    return this.prisma.property.update({
      where: { id: propertyId },
      data: {
        tenants: {
          update: {
            where: { id: tenantId },
            data: tenantData,
          },
        },
      },
      include: {
        tenants: true, // Include tenants in the response
      },
    });
  }
    
}

