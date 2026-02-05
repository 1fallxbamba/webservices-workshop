import { Module } from '@nestjs/common';
import { MoviesService } from './services/movies.service';
import { MoviesController } from './controller/movies.controller';

@Module({
  providers: [MoviesService],
  controllers: [MoviesController],
})
export class MoviesModule {}