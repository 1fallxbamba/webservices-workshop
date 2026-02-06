import { Body, Controller, Delete, Get, HttpCode, Param, Patch, Post } from '@nestjs/common';
import { CreateMovieDto } from '../models/create-movie.dto';
import { UpdateMovieDto } from '../models/update-movie.dto';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Endpoint related to movies')
@Controller('movies')
export class MoviesController {
    @ApiOkResponse({
        description:'return an any of all movies',
        type:'array',
        schema:
        {
            items:
            {
                type:'object',
                
            }
        }
    })
    @Get()
    @HttpCode(200)
    allMovies() {
        return [
            {
                id:1,
                title:'UPC',
                directotCut:'Paul-Biya',
                releaseYear:'2026'
            },
             {
                id:2,
                title:'RDPC',
                directotCut:'Paul-Biya',
                releaseYear:'2026'
            }
        ]
    }

    @Get(':id')
    @HttpCode(200)
    oneMoviesById(@Param('id') id: string)
    {
        return {
            id:id,
            title:'UPC',
            directotCut:'Paul-Biya',
            releaseYear:'2022'
        }
    }

    @Post()
    @HttpCode(201)
    newMovie(@Body() movieData:CreateMovieDto)
    {
        return movieData;
    }

    @Patch()
    @HttpCode(204)
    updateMovie(@Param('id') id: string,@Body() newData:UpdateMovieDto)
    {
        return{id, ...newData}
    }

    @Delete(':id')
    @HttpCode(204)
    deleteOneMovie(@Param('id') id: string) {
        return `Movie with id ${id} deleted !`;
       // return The movie has been deleted
    }
}

