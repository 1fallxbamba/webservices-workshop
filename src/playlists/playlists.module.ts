import { Module } from '@nestjs/common';
import { PlaylistsService } from './services/playlists.service';
import { PlaylistsController } from './controllers/playlists.controller';

@Module({
  controllers: [PlaylistsController],
  providers: [PlaylistsService],
})
export class PlaylistsModule {}
