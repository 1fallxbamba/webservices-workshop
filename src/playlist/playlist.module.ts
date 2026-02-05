import { Module } from '@nestjs/common';
import { PlaylistService } from './services/playlist.service';
import { PlaylistController } from './controllers/playlist.controller';

@Module({
  providers: [PlaylistService],
  controllers: [PlaylistController]
})
export class PlaylistModule {}
