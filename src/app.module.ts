import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MoviesModule } from './movies/movies.module';
import { MoviesService } from './movies/services/movies.service';
import { PartnersModule } from './partners/partners.module';
import { PartnersService } from './partners/services/partners.service';
import { PlaylistModule } from './playlist/playlist.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [MoviesModule, PartnersModule, PlaylistModule, UsersModule],
  controllers: [AppController],
  providers: [AppService, MoviesService, PartnersService],
})
export class AppModule {}
