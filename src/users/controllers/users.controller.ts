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

@Controller('users')
export class UsersController {
  @Get()
  @HttpCode(200)
  allPlaylists() {
    return [
      {
        id: 1,
        name: 'PIERRE',
        email: 'pierre_rubens@gmail.com',
        phone: '0701452368',
        password: 'mdp123456',
      },
      {
        id: 2,
        name: 'ALALOU',
        email: 'alalou.miriam@gmail.com',
        phone: '0678513425',
        password: '123456789',
      },
      {
        id: 3,
        name: 'DUPOND',
        email: 'monique.dupond@gmail.com',
        phone: '0645826145',
        password: 'password',
      },
    ];
  }

  @Get(':id')
  @HttpCode(200)
  onePlaylistById(@Param('id') id: string) {
    return {
      id: id,
      name: 'DUPOND',
      email: 'monique.dupond@gmail.com',
      phone: '0645826145',
      password: 'password',
    };
  }

  @Post()
  @HttpCode(201)
  newPlaylist(
    @Body()
    newData: {
      id: number;
      name: string;
      email: string;
      phone: string;
      password: string;
    },
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
    updateData: {
      name?: string;
      email?: string;
      phone?: string;
      password?: string;
    },
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
    return;
  }
}
