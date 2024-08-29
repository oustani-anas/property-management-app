
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { Property, Prisma } from '@prisma/client';

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
}

