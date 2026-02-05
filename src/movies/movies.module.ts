import { Module } from '@nestjs/common';
import { MoviesController } from './controller/movies.controller';

@Module({
  controllers: [MoviesController]
})
export class MoviesModule {}
