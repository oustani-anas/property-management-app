
import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { PropertyService } from './property.service';
import { Property, Prisma } from '@prisma/client';
import { CreateTenantDto } from 'src/tenant/dto/CreateTenantDto';
import { UpdateTenantDto } from 'src/tenant/dto/UpdateTenantDto';

@Controller('properties')
export class PropertyController {
  constructor(private readonly propertyService: PropertyService) {}

  @Post()
  async create(@Body() data: Prisma.PropertyCreateInput): Promise<Property> {
    console.log("wsaaaal");
    return this.propertyService.create(data);
  }

  @Get()
  async findAll(): Promise<Property[]> {
    return this.propertyService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Property | null> {
    return this.propertyService.findOne(+id);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() data: Prisma.PropertyUpdateInput,
  ): Promise<Property> {
    return this.propertyService.update(+id, data);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<Property> {
    return this.propertyService.remove(+id);
  }

  @Post(':propertyId/tenants')
  async addTenant(
    @Param('propertyId') propertyId: number,
    @Body() tenantData: CreateTenantDto,
  ) {
  return this.propertyService.addTenant(propertyId, tenantData);
  }

  @Delete(':propertyId/tenants/:tenantId')
  async removeTenant(
    @Param('propertyId') propertyId: number,
    @Param('tenantId') tenantId: number,
  ) {
  return this.propertyService.removeTenant(propertyId, tenantId);
  }

  @Put(':propertyId/tenants/:tenantId')
  async updateTenant(
    @Param('propertyId') propertyId: number,
    @Param('tenantId') tenantId: number,
    @Body() tenantData: UpdateTenantDto,
  ) {
  return this.propertyService.updateTenant(propertyId, tenantId, tenantData);
  }

}
