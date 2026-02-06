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
import {
  ApiBadRequestResponse,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiParam,
  ApiTags,
} from '@nestjs/swagger';

@Controller('movies')
@ApiTags('Endpoints : Movies')
export class MoviesController {
  @Get()
  @HttpCode(200)
  @ApiOkResponse({
    description: 'List of all movies',
    schema: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          id: { type: 'number', example: 1 },
          title: { type: 'string', example: 'Iron Man' },
          director: { type: 'string', example: 'Marvel' },
          releaseYear: { type: 'number', example: 2010 },
        },
      },
      example: [
        {
          id: 1,
          title: 'Iron Man',
          director: 'Marvel',
          releaseYear: 2010,
        },
        {
          id: 2,
          title: 'Titanic',
          director: 'James Cameron',
          releaseYear: 1995,
        },
        {
          id: 3,
          title: 'Interstellar',
          director: 'Christopher Nolan',
          releaseYear: 2014,
        },
      ],
    },
  })
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
  @ApiParam({
    name: 'id',
    description: 'The unique identifier of the movie to retrieve',
    required: true,
  })
  @ApiCreatedResponse({
    description: 'The movie has been successfully charged',
  })
  @ApiBadRequestResponse({
    description: 'Invalid parameters in url, check parameters and try again.',
  })
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
  @ApiCreatedResponse({
    description: 'The movie has been successfully created',
  })
  @ApiBadRequestResponse({
    description: 'Invalid input date, check the payload and try again.',
  })
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
