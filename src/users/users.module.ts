/* eslint-disable prettier/prettier */
import { MiddlewareConsumer, Module } from '@nestjs/common';
import { UsersService } from './services/users.service';
import { UsersController } from './controllers/users.controller';

import { ApiAuthMiddleware } from '../security/api-auth.middleware';

@Module({
  providers: [UsersService],
  controllers: [UsersController],
})
export class UsersModule {
  configure(consumer: MiddlewareConsumer) {

    consumer.apply(ApiAuthMiddleware).forRoutes(UsersController);

  }
}