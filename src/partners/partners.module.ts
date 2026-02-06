import { MiddlewareConsumer, Module } from '@nestjs/common';
import { PartnersService } from './services/partners.service';
import { PartnersController } from './controller/partners.controller';
import { ApiAuthMiddleware } from 'src/security/api-auth.middleware';

@Module({
  providers: [PartnersService],
  controllers: [PartnersController],
})
export class PartnersModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(ApiAuthMiddleware).forRoutes(PartnersController);
  }
}
