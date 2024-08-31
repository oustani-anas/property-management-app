import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PropertyModule } from './property/property.module';
import { TenantModule } from './tenant/tenant.module';

@Module({
  imports: [PropertyModule, TenantModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
