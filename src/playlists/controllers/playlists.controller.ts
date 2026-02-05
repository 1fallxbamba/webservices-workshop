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

@Controller('playlists')
export class PlaylistsController {
  @Get()
  @HttpCode(200)
  allPlaylists() {
    return [
      {
        id: 1,
        name: 'Thriller',
        type: 'Movies',
      },
      {
        id: 2,
        name: 'Action',
        type: 'Series',
      },
      {
        id: 3,
        name: 'Thriller',
        type: 'Series',
      },
    ];
  }

  @Get(':id')
  @HttpCode(200)
  onePlaylistById(@Param('id') id: string) {
    return {
      id: id,
      name: 'Thriller',
      type: 'Series',
    };
  }

  @Post()
  @HttpCode(201)
  newPlaylist(
    @Body()
    newData: CreatePlaylistDTO,
  ) {
    return {
      success: 'Post : ok',
      playlist: newData,
    };
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
