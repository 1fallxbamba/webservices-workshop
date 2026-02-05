import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MoviesModule } from './movies/movies.module';
import { PlaylistsModule } from './playlists/playlists.module';
import { UsersModule } from './users/users.module';
import { PartnersModule } from './partners/partners.module';

@Module({
  imports: [MoviesModule, PlaylistsModule, UsersModule, PartnersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
