import { Module } from '@nestjs/common';
import { PartnersService } from './services/partners.service';
import { PartnersController } from './controllers/partners.controller';

@Module({
  controllers: [PartnersController],
  providers: [PartnersService],
})
export class PartnersModule {}
