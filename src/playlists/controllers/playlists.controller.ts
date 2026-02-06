/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, HttpCode, Param, Patch, Post } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiParam, ApiBody } from '@nestjs/swagger';

@ApiTags('Playlists')
@Controller('playlists')
export class PlaylistsController {
    @Get()
    @HttpCode(200)
    @ApiOperation({ 
        summary: 'Get all playlists',
        description: 'Retrieves a list of all available playlists'
    })
    @ApiResponse({ 
        status: 200, 
        description: 'List of playlists retrieved successfully',
        schema: {
            type: 'array',
            items: {
                type: 'object',
                properties: {
                    id: { type: 'number', example: 1 },
                    name: { type: 'string', example: 'Sci-Fi Classics' },
                    description: { type: 'string', example: 'A collection of the best science fiction movies.' }
                }
            }
        }
    })
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
    @ApiOperation({ 
        summary: 'Get a playlist by ID',
        description: 'Retrieves detailed information about a specific playlist'
    })
    @ApiParam({ 
        name: 'id', 
        description: 'The unique identifier of the playlist',
        example: '1'
    })
    @ApiResponse({ 
        status: 200, 
        description: 'Playlist found and returned successfully',
        schema: {
            type: 'object',
            properties: {
                id: { type: 'string', example: '1' },
                name: { type: 'string', example: 'Comedy Gold' },
                description: { type: 'string', example: 'A selection of the funniest movies ever made.' }
            }
        }
    })
    @ApiResponse({ status: 404, description: 'Playlist not found' })
    onePlaylistById(@Param('id') id: string) {
        return {
            id: id,
            name: 'Comedy Gold',
            description: 'A selection of the funniest movies ever made.',
        }
    }

    @Post()
    @HttpCode(201)
    @ApiOperation({ 
        summary: 'Create a new playlist',
        description: 'Creates a new playlist in the system'
    })
    @ApiBody({
        description: 'Playlist data to create',
        schema: {
            type: 'object',
            required: ['id', 'name', 'description'],
            properties: {
                id: { type: 'number', example: 4 },
                name: { type: 'string', example: 'Horror Nights' },
                description: { type: 'string', example: 'The scariest horror movies of all time.' }
            }
        }
    })
    @ApiResponse({ 
        status: 201, 
        description: 'Playlist created successfully',
        schema: {
            type: 'object',
            properties: {
                id: { type: 'number', example: 4 },
                name: { type: 'string', example: 'Horror Nights' },
                description: { type: 'string', example: 'The scariest horror movies of all time.' }
            }
        }
    })
    @ApiResponse({ status: 400, description: 'Invalid input data' })
    newPlaylist(@Body() playlistData: { id: number, name: string, description: string }) {
        return playlistData
    }

    @Patch(':id')
    @HttpCode(204)
    @ApiOperation({ 
        summary: 'Update a playlist',
        description: 'Updates specific fields of an existing playlist'
    })
    @ApiParam({ 
        name: 'id', 
        description: 'The unique identifier of the playlist to update',
        example: '1'
    })
    @ApiBody({
        description: 'Fields to update (all optional)',
        schema: {
            type: 'object',
            properties: {
                name: { type: 'string', example: 'Sci-Fi Masterpieces' },
                description: { type: 'string', example: 'Updated description for sci-fi classics.' }
            }
        }
    })
    @ApiResponse({ status: 204, description: 'Playlist updated successfully' })
    @ApiResponse({ status: 404, description: 'Playlist not found' })
    @ApiResponse({ status: 400, description: 'Invalid input data' })
    updatePlaylist(@Param('id') id: string, @Body() newData: { name?: string, description?: string }) {
        return { id, ...newData }
    }

    @Delete(':id')
    @HttpCode(200)
    @ApiOperation({ 
        summary: 'Delete a playlist',
        description: 'Removes a playlist from the system'
    })
    @ApiParam({ 
        name: 'id', 
        description: 'The unique identifier of the playlist to delete',
        example: '1'
    })
    @ApiResponse({ 
        status: 200, 
        description: 'Playlist deleted successfully',
        schema: {
            type: 'string',
            example: 'Playlist with id 1 deleted !'
        }
    })
    @ApiResponse({ status: 404, description: 'Playlist not found' })
    deleteOnePlaylist(@Param('id') id: string) {
        return `Playlist with id ${id} deleted !`;
    }
}
