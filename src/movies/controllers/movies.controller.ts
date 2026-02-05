/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('movies')
export class MoviesController {
    @Get()
    allMovies() {
        return [
            {
                id: 1,
                title: 'Inception',
                director: 'Christopher Nolan',
                releaseYear: 2010,
            },
            {
                id: 2,
                title: 'The Matrix',
                director: 'Lana Wachowski, Lilly Wachowski',
                releaseYear: 1999,
            },
            {
                id: 3,
                title: 'Interstellar',
                director: 'Christopher Nolan',
                releaseYear: 2014,
            }
        ]
    }

    @Get(':id')
    oneMovieById(@Param('id') id: string) {
        return {
            id: id,
            title: 'Inception',
            director: 'Christopher Nolan',
            releaseYear: 2010,
        }
    }

    @Post()
    newMovie(@Body() movieData: { id: number, title: string, director: string, releaseYear: number }) {
        return movieData
    }
}
