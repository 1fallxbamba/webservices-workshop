import { Module } from '@nestjs/common';
import { PartnersService } from './services/partners.service';
import { PartnersController } from './controllers/partners.controller';

@Module({
  providers: [PartnersService],
  controllers: [PartnersController]
})
export class PartnersModule {}
