import { Module } from '@nestjs/common';
import { PlalistsController } from './controller/plalists.controller';
import { PlaylistsService } from './services/playlists.service';

@Module({
  controllers: [PlalistsController],
  providers: [PlaylistsService]
})
export class PlaylistsModule {}
