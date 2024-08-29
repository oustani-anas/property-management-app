import { Module } from '@nestjs/common';
import { PropertyService } from './property.service';
import { PropertyController } from './property.controller';
import { PrismaService } from '../../prisma/prisma.service';

@Module({
  providers: [PropertyService, PrismaService],
  controllers: [PropertyController]
})
export class PropertyModule {}
