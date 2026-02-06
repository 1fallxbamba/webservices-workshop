import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreatePlaylistDTO } from '../models/createPlaylist.dto';
import { UpdatePlaylistDTO } from '../models/updatePlaylist.dto';
import {
  ApiBadRequestResponse,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiParam,
  ApiTags,
} from '@nestjs/swagger';

@Controller('playlists')
@ApiTags('Endpoints : Playlists')
export class PlaylistsController {
  @Get()
  @HttpCode(200)
  @ApiOkResponse({
    description: 'List of all playlists',
    schema: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          id: { type: 'number', example: 1 },
          name: { type: 'string', example: 'Thriller' },
          type: { type: 'string', example: 'Movies' },
        },
      },
      example: [
        { id: 1, name: 'Thriller', type: 'Movies' },
        { id: 2, name: 'Action', type: 'Series' },
        { id: 3, name: 'Thriller', type: 'Series' },
      ],
    },
  })
  allPlaylists() {
    return [
      { id: 1, name: 'Thriller', type: 'Movies' },
      { id: 2, name: 'Action', type: 'Series' },
      { id: 3, name: 'Thriller', type: 'Series' },
    ];
  }

  @Get(':id')
  @HttpCode(200)
  @ApiParam({
    name: 'id',
    description: 'The unique identifier of the playlist to retrieve',
    required: true,
  })
  @ApiOkResponse({
    description: 'The playlist has been successfully retrieved',
    schema: {
      type: 'object',
      properties: {
        id: { type: 'number', example: 1 },
        name: { type: 'string', example: 'Thriller' },
        type: { type: 'string', example: 'Movies' },
      },
      example: { id: 1, name: 'Thriller', type: 'Series' },
    },
  })
  @ApiBadRequestResponse({
    description: 'Invalid parameters in url, check parameters and try again.',
  })
  onePlaylistById(@Param('id') id: string) {
    return { id: id, name: 'Thriller', type: 'Series' };
  }

  @Post()
  @HttpCode(201)
  @ApiCreatedResponse({
    description: 'The playlist has been successfully created',
    schema: {
      type: 'object',
      properties: {
        success: { type: 'string', example: 'Post : ok' },
        playlist: { $ref: '#/components/schemas/CreatePlaylistDTO' },
      },
    },
  })
  @ApiBadRequestResponse({
    description: 'Invalid input data, check the payload and try again.',
  })
  newPlaylist(@Body() newData: CreatePlaylistDTO) {
    return { success: 'Post : ok', playlist: newData };
  }

  @Patch(':id')
  @HttpCode(200)
  updatePlaylist(
    @Param('id') id: string,
    @Body()
    updateData: UpdatePlaylistDTO,
  ) {
    return {
      success: 'Patch : ok',
      id: id,
      playlist: updateData,
    };
  }

  @Delete(':id')
  @HttpCode(204)
  deletePlaylist(@Param('id') id: string) {
    return id;
  }
}
