import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
<<<<<<< HEAD
<<<<<<< HEAD
import { MoviesModule } from './movies/movies.module';
import { UsersModule } from './users/users.module';
import { PlaylistsModule } from './playlists/playlists.module';
import { PartnersModule } from './partners/partners.module';

@Module({
  imports: [MoviesModule, UsersModule, PlaylistsModule, PartnersModule],
=======

@Module({
  imports: [],
>>>>>>> 09a7179 (The commit)
=======
import { MoviesModule } from './movies/movies.module';

@Module({
  imports: [MoviesModule],
>>>>>>> d6a2aab (create movies API)
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
