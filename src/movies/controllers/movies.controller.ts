/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, HttpCode, Param, Patch, Post } from '@nestjs/common';

@Controller('movies')
export class MoviesController {
    @Get()
    @HttpCode(200)
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
    @HttpCode(200)
    oneMovieById(@Param('id') id: string) {
        return {
            id: id,
            title: 'Inception',
            director: 'Christopher Nolan',
            releaseYear: 2010,
        }
    }

    @Post()
    @HttpCode(201)
    newMovie(@Body() movieData: { id: number, title: string, director: string, releaseYear: number }) {
        return movieData
    }

    @Patch(':id')
    @HttpCode(204)
    updateMovie(@Param('id') id: string, @Body() newData: { title?: string, director?: string, releaseYear?: number }) {
        return { id, ...newData }
    }

    @Delete(':id')
    @HttpCode(200)
    deleteOneMovie(@Param('id') id: string) {
        return `Movie with id ${id} deleted !`;
    }

}
