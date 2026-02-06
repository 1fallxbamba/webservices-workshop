/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, HttpCode, Param, Patch, Post } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiParam, ApiBody } from '@nestjs/swagger';

@ApiTags('Movies')
@Controller('movies')
export class MoviesController {
    @Get()
    @HttpCode(200)
    @ApiOperation({ 
        summary: 'Get all movies',
        description: 'Retrieves a list of all available movies in the catalog'
    })
    @ApiResponse({ 
        status: 200, 
        description: 'List of movies retrieved successfully',
        schema: {
            type: 'array',
            items: {
                type: 'object',
                properties: {
                    id: { type: 'number', example: 1 },
                    title: { type: 'string', example: 'Inception' },
                    director: { type: 'string', example: 'Christopher Nolan' },
                    releaseYear: { type: 'number', example: 2010 }
                }
            }
        }
    })
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
    @ApiOperation({ 
        summary: 'Get a movie by ID',
        description: 'Retrieves detailed information about a specific movie'
    })
    @ApiParam({ 
        name: 'id', 
        description: 'The unique identifier of the movie',
        example: '1'
    })
    @ApiResponse({ 
        status: 200, 
        description: 'Movie found and returned successfully',
        schema: {
            type: 'object',
            properties: {
                id: { type: 'string', example: '1' },
                title: { type: 'string', example: 'Inception' },
                director: { type: 'string', example: 'Christopher Nolan' },
                releaseYear: { type: 'number', example: 2010 }
            }
        }
    })
    @ApiResponse({ status: 404, description: 'Movie not found' })
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
    @ApiOperation({ 
        summary: 'Create a new movie',
        description: 'Adds a new movie to the catalog'
    })
    @ApiBody({
        description: 'Movie data to create',
        schema: {
            type: 'object',
            required: ['id', 'title', 'director', 'releaseYear'],
            properties: {
                id: { type: 'number', example: 4 },
                title: { type: 'string', example: 'The Dark Knight' },
                director: { type: 'string', example: 'Christopher Nolan' },
                releaseYear: { type: 'number', example: 2008 }
            }
        }
    })
    @ApiResponse({ 
        status: 201, 
        description: 'Movie created successfully',
        schema: {
            type: 'object',
            properties: {
                id: { type: 'number', example: 4 },
                title: { type: 'string', example: 'The Dark Knight' },
                director: { type: 'string', example: 'Christopher Nolan' },
                releaseYear: { type: 'number', example: 2008 }
            }
        }
    })
    @ApiResponse({ status: 400, description: 'Invalid input data' })
    newMovie(@Body() movieData: { id: number, title: string, director: string, releaseYear: number }) {
        return movieData
    }

    @Patch(':id')
    @HttpCode(204)
    @ApiOperation({ 
        summary: 'Update a movie',
        description: 'Updates specific fields of an existing movie'
    })
    @ApiParam({ 
        name: 'id', 
        description: 'The unique identifier of the movie to update',
        example: '1'
    })
    @ApiBody({
        description: 'Fields to update (all optional)',
        schema: {
            type: 'object',
            properties: {
                title: { type: 'string', example: 'Inception - Updated' },
                director: { type: 'string', example: 'Christopher Nolan' },
                releaseYear: { type: 'number', example: 2010 }
            }
        }
    })
    @ApiResponse({ status: 204, description: 'Movie updated successfully' })
    @ApiResponse({ status: 404, description: 'Movie not found' })
    @ApiResponse({ status: 400, description: 'Invalid input data' })
    updateMovie(@Param('id') id: string, @Body() newData: { title?: string, director?: string, releaseYear?: number }) {
        return { id, ...newData }
    }

    @Delete(':id')
    @HttpCode(200)
    @ApiOperation({ 
        summary: 'Delete a movie',
        description: 'Removes a movie from the catalog'
    })
    @ApiParam({ 
        name: 'id', 
        description: 'The unique identifier of the movie to delete',
        example: '1'
    })
    @ApiResponse({ 
        status: 200, 
        description: 'Movie deleted successfully',
        schema: {
            type: 'string',
            example: 'Movie with id 1 deleted !'
        }
    })
    @ApiResponse({ status: 404, description: 'Movie not found' })
    deleteOneMovie(@Param('id') id: string) {
        return `Movie with id ${id} deleted !`;
    }

}
