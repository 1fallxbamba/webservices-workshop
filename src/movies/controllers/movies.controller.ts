import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Patch,
  Delete,
  HttpCode,
} from '@nestjs/common';
import { CreateMovieDTO } from '../models/createMovie.dto';
import { UpdateMovieDTO } from '../models/updateMovie.dto';

@Controller('movies')
export class MoviesController {
  @Get()
  @HttpCode(200)
  allMovies() {
    return [
      {
        id: 1,
        title: 'Iron man',
        director: 'Marvel',
        releasedYear: 2010,
      },
      {
        id: 2,
        title: 'Titanic',
        director: 'James Cameroun',
        releaseYear: 1995,
      },
      {
        id: 3,
        title: 'Insterstellar',
        director: 'Christofer Nolan',
        releaseYear: 2010,
      },
    ];
  }

  @Get(':id')
  @HttpCode(200)
  oneMovieById(@Param('id') id: string) {
    return {
      id: id,
      title: 'Insterstellar',
      director: 'Christofer Nolan',
      releaseYear: 2010,
    };
  }

  @Post()
  @HttpCode(201)
  newMovie(
    @Body()
    movieData: CreateMovieDTO,
  ) {
    return {
      success: 'Post : ok',
      movie: movieData,
    };
  }

  @Patch(':id')
  @HttpCode(200)
  updateMovie(
    @Param('id') id: string,
    @Body()
    updateData: UpdateMovieDTO,
  ) {
    return {
      success: 'Patch : ok',
      id: id,
      movie: updateData,
    };
  }

  @Delete(':id')
  @HttpCode(204)
  deleteMovie(@Param('id') id: string) {
    return id;
  }
}
