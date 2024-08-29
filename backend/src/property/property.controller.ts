
import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { PropertyService } from './property.service';
import { Property, Prisma } from '@prisma/client';

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
}
