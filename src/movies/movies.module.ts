import { MiddlewareConsumer, Module } from '@nestjs/common';
import { MoviesService } from './services/movies.service';
import { MoviesController } from './controller/movies.controller';
import { ApiAuthMiddleware } from 'src/security/api-auth.middleware';

@Module({
  providers: [MoviesService],
  controllers: [MoviesController],
})
export class MoviesModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(ApiAuthMiddleware).forRoutes(MoviesController);
  }
}
