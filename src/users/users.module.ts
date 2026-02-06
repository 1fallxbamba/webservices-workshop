import { MiddlewareConsumer, Module } from '@nestjs/common';
import { UsersService } from './services/users.service';
import { UsersController } from './controllers/users.controller';
import { ApiAuthMiddleware } from 'src/security/api-auth.middleware';

@Module({
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {

  configure(consumer: MiddlewareConsumer ) {
    consumer
      .apply(ApiAuthMiddleware).forRoutes(UsersController);
  }
}
