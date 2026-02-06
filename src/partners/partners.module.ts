import { Module } from '@nestjs/common';
import { PartnersService } from './services/partners.service';
import { PartnersController } from './controller/parteners.controller';

@Module({
  providers: [PartnersService],
  controllers: [PartnersController]
})
export class PartnersModule {}
