import { MiddlewareConsumer, Module } from '@nestjs/common';
import { PartnersService } from './services/partners.service';
import { PartnersController } from './controllers/partners.controller';
import { ApiAuthMiddleware } from '../security/api-auth.middleware';

@Module({
  providers: [PartnersService],
  controllers: [PartnersController]
})
export class PartnersModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(ApiAuthMiddleware)
      .forRoutes(PartnersController);
  }
}
