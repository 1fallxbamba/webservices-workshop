/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, HttpCode, Param, Patch, Post } from '@nestjs/common';
import { ApiBadRequestResponse, ApiCreatedResponse, ApiNoContentResponse, ApiOkResponse, ApiParam, ApiTags } from '@nestjs/swagger';

@ApiTags('Endpoints related to Movies resource')
@Controller('movies')
export class MoviesController {

    @ApiOkResponse({
        description: 'Returns an array of all movies',
        type: 'array',
        schema: {
            items:
            {
                type: 'object',
                properties:
                {
                    id: { type: 'string' },
                    title: { type: 'string' },
                    director: { type: 'string' },
                    releaseYear: { type: 'number' }
                }
            }
        },
        examples: {
            example1: {
                summary: 'Example response',
                value: [
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
        }
    },
    )
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

    @ApiParam(
        {
            name: 'id',
            description: 'The unique identifier of the movie to retrieve',
            required: true,
            example: 7,
            type: 'string'
        }
    )
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

    @ApiCreatedResponse({
        description: 'The movie has been successfully created',
    })
    @ApiBadRequestResponse({
        description: 'Invalid input data, check the payload and try again. Invalid propery type or missing required property',
    })
    @Post()
    @HttpCode(201)
    newMovie(@Body() movieData: { id: number, title: string, director: string, releaseYear: number }) {
        return movieData
    }

    @Patch(':id')
    @ApiNoContentResponse({
        description: 'The movie has been successfully updated, don\'t worry about the 204',
    })
    @ApiBadRequestResponse({
        description: 'Invalid input data, check the payload and try again. Invalid propery type',
    })
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
