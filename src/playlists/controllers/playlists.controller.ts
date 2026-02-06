/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, HttpCode, Param, Patch, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Endpoints related to Playlists resource')
@Controller('playlists')
export class PlaylistsController {
    @Get()
    @HttpCode(200)
    allPlaylists() {
        return [
            {
                id: 1,
                name: 'Sci-Fi Classics',
                description: 'A collection of the best science fiction movies.',
            },
            {
                id: 2,
                name: 'Action Hits',
                description: 'The most thrilling action movies of all time.',
            },
            {
                id: 3,
                name: 'Comedy Gold',
                description: 'A selection of the funniest movies ever made.',
            }
        ]
    }

    @Get(':id')
    @HttpCode(200)
    onePlaylistById(@Param('id') id: string) {
        return {
            id: id,
            name: 'Comedy Gold',
            description: 'A selection of the funniest movies ever made.',
        }
    }

    @Post()
    @HttpCode(201)
    newPlaylist(@Body() playlistData: { id: number, name: string, description: string }) {
        return playlistData
    }

    @Patch(':id')
    @HttpCode(204)
    updatePlaylist(@Param('id') id: string, @Body() newData: { name?: string, description?: string }) {
        return { id, ...newData }
    }

    @Delete(':id')
    @HttpCode(200)
    deleteOnePlaylist(@Param('id') id: string) {
        return `Playlist with id ${id} deleted !`;
    }
}