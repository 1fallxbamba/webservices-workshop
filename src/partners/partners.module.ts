import { MiddlewareConsumer, Module } from '@nestjs/common';
import { PartnersService } from './services/partners.service';
import { PartnersController } from './controllers/partners.controller';
import { ApiAuthMiddleware } from 'src/security/api-auth.middleware';

@Module({
  controllers: [PartnersController],
  providers: [PartnersService],
})
export class PartnersModule {
  configure(consumer: MiddlewareConsumer ) {
    consumer
      .apply(ApiAuthMiddleware).forRoutes(PartnersController);
  }
}
