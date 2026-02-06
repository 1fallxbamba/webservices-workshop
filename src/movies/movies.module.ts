import { MiddlewareConsumer, Module } from '@nestjs/common';
import { MoviesService } from './services/movies.service';
import { MoviesController } from './controllers/movies.controller';
import { ApiAuthMiddleware } from '../security/api-auth.middleware';
@Module({
  providers: [MoviesService],
  controllers: [MoviesController],
})
export class MoviesModule {
   configure(consumer: MiddlewareConsumer) {
    
        consumer.apply(ApiAuthMiddleware).forRoutes(MoviesController);
    
      }
}
