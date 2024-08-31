
import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { TenantService } from './tenant.service';
import { CreateTenantDto } from './dto/CreateTenantDto';
import { UpdateTenantDto } from './dto/UpdateTenantDto';

@Controller('tenants')
export class TenantController {
  constructor(private readonly tenantService: TenantService) {}

  @Post()
  async createTenant(@Body() data: CreateTenantDto) {
    return this.tenantService.createTenant(data);
  }

  @Get()
  async getAllTenants() {
    return this.tenantService.getAllTenants();
  }

  @Get(':id')
  async getTenantById(@Param('id') id: number) {
    return this.tenantService.getTenantById(id);
  }

  @Put(':id')
  async updateTenant(@Param('id') id: number, @Body() data: UpdateTenantDto) {
    return this.tenantService.updateTenant(id, data);
  }

  @Delete(':id')
  async deleteTenant(@Param('id') id: number) {
    return this.tenantService.deleteTenant(id);
  }
}
