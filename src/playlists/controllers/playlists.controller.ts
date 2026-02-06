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
import { PlaylistsService } from '../services/playlists.service';
import { CreatePlaylistDto } from '../dto/create-playlist.dto';
import { UpdatePlaylistDto } from '../dto/update-playlist.dto';

@Controller('playlists')
export class PlaylistsController {
  constructor(private readonly playlistsService: PlaylistsService) {}

  // POST /playlists
  @Post()
  @HttpCode(201)
  create(@Body() createPlaylistDto: CreatePlaylistDto) {
    return this.playlistsService.create(createPlaylistDto);
  }

  // GET /playlists
  @Get()
  findAll() {
    return this.playlistsService.findAll();
  }

  // GET /playlists/:id
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.playlistsService.findOne(+id);
  }

  // PATCH /playlists/:id
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updatePlaylistDto: UpdatePlaylistDto,
  ) {
    return this.playlistsService.update(+id, updatePlaylistDto);
  }

  // DELETE /playlists/:id
  @Delete(':id')
  @HttpCode(204)
  remove(@Param('id') id: string) {
    return this.playlistsService.remove(+id);
  }
}
