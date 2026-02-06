import { MiddlewareConsumer, Module } from '@nestjs/common';
import { UsersController } from './controller/users.controller';
import { UsersService } from './services/users.service';
import { ApiAuthMiddleware } from 'src/security/api-auth.middleware';

@Module({
  providers: [UsersService],
  controllers: [UsersController],
})
export class UsersModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(ApiAuthMiddleware).forRoutes(UsersController);
  }
}
