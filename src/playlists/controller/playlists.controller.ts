/* eslint-disable prettier/prettier */
import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Patch,
  Post,
} from '@nestjs/common';

@Controller('playlists')
export class PlaylistsController {
  @Get()
  @HttpCode(200)
  allPlaylists() {
    return [
      {
        id: 1,
        name: 'Rock Classics',
        description: 'Les meilleurs morceaux de rock',
        tracksCount: 15,
      },
      {
        id: 2,
        name: 'Lo-fi Beats',
        description: 'Musique pour se concentrer',
        tracksCount: 42,
      },
    ];
  }

  @Get(':id')
  @HttpCode(200)
  getOnePlaylist(@Param('id') id: string) {
    return {
      id: Number(id),
      name: 'Summer Vibes',
      description: 'Playlist pour la plage',
      tracksCount: 20,
    };
  }

  @Post()
  @HttpCode(201)
  createPlaylist(
    @Body()
    playlistData: {
      name: string;
      description: string;
    },
  ) {
    return {
      id: Math.floor(Math.random() * 1000),
      ...playlistData,
      tracksCount: 0,
    };
  }

  @Delete(':id')
  @HttpCode(200)
  removePlaylist(@Param('id') id: string) {
    return {
      message: `La playlist avec l'ID ${id} a été supprimée avec succès`,
      id: Number(id),
    };
  }

  @Patch(':id')
  @HttpCode(200)
  updatePlaylist(
    @Param('id') id: string,
    @Body()
    updateData: {
      name?: string;
      description?: string;
    },
  ) {
    return {
      message: `Mise à jour de la playlist ${id}`,
      ...updateData,
    };
  }
}
