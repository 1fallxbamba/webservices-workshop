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