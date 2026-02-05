import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MoviesModule } from './movies/movies.module';
import { MoviesService } from './movies/services/movies.service';

@Module({
  imports: [MoviesModule],
  controllers: [AppController],
  providers: [AppService, MoviesService],
})
export class AppModule {}
