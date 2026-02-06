import { MiddlewareConsumer, Module } from '@nestjs/common';
import { PlaylistsService } from './services/playlists.service';
import { PlaylistsController } from './controllers/playlists.controller';
import { ApiAuthMiddleware } from '../security/api-auth.middleware';

@Module({
  providers: [PlaylistsService],
  controllers: [PlaylistsController]
})
export class PlaylistsModule {
configure(consumer: MiddlewareConsumer) {

    consumer.apply(ApiAuthMiddleware).forRoutes(PlaylistsController);

  }
}
