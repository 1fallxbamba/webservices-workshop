import { Body, Controller, Delete, Get, HttpCode, Param, Patch, Post } from '@nestjs/common';

@Controller('movies')
export class MoviesController {
    @Get()
    @HttpCode(200)
    allMovies() {
        return [
            {
                id:1,
                title:'UPC',
                directotCut:'Paul-Biya',
                releaseYear:'2025'
            },
             {
                id:2,
                title:'RDPC',
                directotCut:'Paul-Biya',
                releaseYear:'2025'
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
            releaseYear:'2025'
        }
    }

    @Post()
    @HttpCode(201)
    newMovie(@Body() movieData: {title: string,directotCut:string,releaseYear:string})
    {
        return movieData;
    }

    @Patch()
    @HttpCode(204)
    updateMovie(@Param('id') id: string,@Body() newData:{title?: string,directotCut?:string,releaseYear?:string})
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

