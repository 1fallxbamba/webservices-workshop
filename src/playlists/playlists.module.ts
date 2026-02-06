import { MiddlewareConsumer, Module } from '@nestjs/common';
import { PlalistsController } from './controller/plalists.controller';
import { PlaylistsService } from './services/playlists.service';
import { ApiAuthMiddleware } from 'src/security/api-auth.middleware';

@Module({
  controllers: [PlalistsController],
  providers: [PlaylistsService]
})
export class PlaylistsModule {
  configure(consumer: MiddlewareConsumer)
  {
    consumer.apply(ApiAuthMiddleware).forRoutes(PlaylistsService);
  }
}
 
