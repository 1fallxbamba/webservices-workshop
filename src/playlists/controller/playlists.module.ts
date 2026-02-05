import { Module } from '@nestjs/common';
import { PlaylistsService } from './services/playlists.service';
import { PlaylistsController } from './controller/playlists.controller';

@Module({
  providers: [PlaylistsService],
  controllers: [PlaylistsController],
})
export class PlaylistsModule {}