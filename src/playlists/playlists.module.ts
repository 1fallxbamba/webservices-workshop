import { MiddlewareConsumer, Module } from '@nestjs/common';
import { PlaylistsService } from './services/playlists.service';
import { PlaylistsController } from './controllers/playlists.controller';
import { ApiAuthMiddleware } from 'src/security/api-auth.middleware';

@Module({
  controllers: [PlaylistsController],
  providers: [PlaylistsService],
})
export class PlaylistsModule {
  configure(consumer: MiddlewareConsumer ) {
    consumer
      .apply(ApiAuthMiddleware).forRoutes(PlaylistsController);
  }
}


