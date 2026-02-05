import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MoviesModule } from './movies/movies.module';
import { UsersModule } from './users/users.module';
import { PlaylistsModule } from './playlists/playlists.module';
import { PartnersModule } from './partners/partners.module';

@Module({
  imports: [MoviesModule, UsersModule, PlaylistsModule, PartnersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
