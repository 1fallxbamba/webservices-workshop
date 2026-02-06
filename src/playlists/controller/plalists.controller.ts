
import { Body, Controller, Delete, Get, HttpCode, Param, Patch, Post } from '@nestjs/common';
import { CreatePlaylistDto } from '../models/create-playlist.dto';
import { UpdatePlaylistDto } from '../models/update-playlist.dto';

@Controller('playlists')
export class PlalistsController {
    @Get()
    @HttpCode(200)
    allPlaylist() {
        return [
            {
                id: 1,
                name: 'paulBiya 2025',
                nomberMovie: 5,
                title: 'Action'
            },
             {
                id:2,
                name: 'paulBiya 2025',
                nomberMovie: 5,
                title: 'Action'
            }
        ]
    }

    @Get(':id')
    @HttpCode(200)
    oneusersById(@Param('id') id: string)
    {
        return {
            id:id,
            name: 'paulBiya 2025',
            nomberMovie: 5,
            title: 'Action'
        }
    }

    @Post()
    @HttpCode(201)
    newUser(@Body() playlistData:CreatePlaylistDto)
    {
        return playlistData;
    }

    @Patch()
    @HttpCode(204)
    updateUser(@Param('id') id: string,@Body() newData:UpdatePlaylistDto)
    {
        return{id, ...newData}
    }

    @Delete(':id')
    @HttpCode(204)
    deleteOneUser(@Param('id') id: string) {
        return `Movie with id ${id} deleted !`;
       // return The movie has been deleted
    }
}

