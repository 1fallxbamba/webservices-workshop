import { Module } from '@nestjs/common';
<<<<<<< HEAD
import { MoviesService } from './services/movies.service';
import { MoviesController } from './controllers/movies.controller';

@Module({
  providers: [MoviesService],
  controllers: [MoviesController],
=======
import { MoviesController } from './controllers/movies.controller';
import { MoviesService } from './services/movies.service';

@Module({
  controllers: [MoviesController],
  providers: [MoviesService]
>>>>>>> d6a2aab (create movies API)
})
export class MoviesModule {}
