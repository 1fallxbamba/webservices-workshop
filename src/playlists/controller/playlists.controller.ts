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
import { 
  ApiTags, 
  ApiParam, 
  ApiOkResponse, 
  ApiCreatedResponse, 
  ApiBadRequestResponse, 
  ApiNotFoundResponse 
} from '@nestjs/swagger';

@ApiTags('Endpoints relatifs aux playlists')
@Controller('playlists')
export class PlaylistsController {
  @Get()
  @HttpCode(200)
  @ApiOkResponse({ description: 'Liste des playlists récupérée avec succès.' })
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
  @ApiParam({ name: 'id', description: 'Identifiant de la playlist à récupérer', example: '1' })
  @ApiOkResponse({ description: 'Détails de la playlist.' })
  @ApiNotFoundResponse({ description: 'Playlist introuvable.' })
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
  @ApiCreatedResponse({ description: 'La playlist a été créée.' })
  @ApiBadRequestResponse({ description: 'Données d\'entrée invalides.' })
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
  @ApiParam({ name: 'id', description: 'ID de la playlist à supprimer', example: '5' })
  @ApiOkResponse({ description: 'La playlist a été supprimée.' })
  removePlaylist(@Param('id') id: string) {
    return {
      message: `La playlist avec l'ID ${id} a été supprimée avec succès`,
      id: Number(id),
    };
  }

  @Patch(':id')
  @HttpCode(200)
  @ApiParam({ name: 'id', description: 'ID de la playlist à modifier', example: '12' })
  @ApiOkResponse({ description: 'La playlist a été mise à jour.' })
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