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
import { ApiBadRequestResponse, ApiNoContentResponse, ApiOkResponse, ApiTags, ApiParam } from '@nestjs/swagger';

@ApiOkResponse({ description: 'Retourne une liste de films', type: [Object] })
@ApiTags('Enpoints relatifs aux movies')
@ApiBadRequestResponse({ description: 'Requête invalide' }) 
@Controller('movies')
export class MoviesController {
  @Get()
  @HttpCode(200)
  allMovies() {
    return [
      {
        id: 1,
        title: 'The Shawshank Redemption',
        director: 'hang tsu',
        year: 1994,
      },
      {
        id: 2,
        title: 'The Godfather',
        director: 'Al pacino',
        year: 1972,
      },
      {
        id: 3,
        title: 'The Dark Knight',
        director: 'Christopher Nolan',
        year: 2008,
      },
    ];
  }

  @Get(':id')
  @HttpCode(200)
  @ApiParam({ name: 'id', description: 'L\'identifiant unique du film', example: '1' })
  @ApiBadRequestResponse({ description: 'Requête invalide' }) 
  getOneMovie(@Param('id') id: string) {
    return {
      id: Number(id),
      title: 'Inception',
      director: 'Christopher Nolan',
      year: 2010,
    };
  }

  @Post()
  @HttpCode(201)
  @ApiOkResponse({ description: 'Le film a été créé avec succès', type: Object }) 
  @ApiNoContentResponse({ description: 'Aucun contenu retourné' })
  @ApiBadRequestResponse({ description: 'Requête invalide' }) 
  createMovie(
    @Body()
    movieData: {
      id: string;
      title: string;
      director: string;
      year: number;
    },
  ) {
    return movieData;
  }

  @Delete(':id')
  @HttpCode(200)
  removeMovie(@Param('id') id: string) {
    return {
      message: `Le film avec l'ID ${id} a bien été supprimé`,
      id: Number(id),
    };
  }

  @Patch(':id')
  @HttpCode(200)
  @ApiParam({ name: 'id', description: 'ID du film à modifier', example: '5' })
  patchMovie(
    @Param('id') id: string,
    @Body()
    updateData: {
      id?: string;
      title?: string;
      director?: string;
      year?: number;
    },
  ) {
    return {
      message: `Mise à jour du film ${id}`,
      ...updateData,
    };
  }
}
