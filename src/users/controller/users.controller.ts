/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpException,
  HttpStatus,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateUserDto } from '../models/create-user.dto';
import { UpdateUserDto } from '../models/update-user-dto';

@Controller('users')
export class UsersController {
  @Get()
  @HttpCode(200)
  allUsers() {
    return [
      {
        id: 1,
        username: 'john_doe',
        email: 'john@example.com',
        role: 'admin',
      },
      {
        id: 2,
        username: 'jane_smith',
        email: 'jane@example.com',
        role: 'user',
      },
    ];
  }

  @Get(':id')
  @HttpCode(200)
  getOneUser(@Param('id') id: string) {
    return {
      id: Number(id),
      username: 'lucky_user',
      email: 'lucky@example.com',
      role: 'user',
    };
  }

  @Post()
  @HttpCode(201)
  createUser(@Body() userData: CreateUserDto) {
    try {
      return {
        id: 3,
        ...userData,
        createdAt: new Date().toISOString(),
      };
    } catch {
      throw new HttpException(
        'Une erreur est survenue lors de la création de l’utilisateur',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Delete(':id')
  @HttpCode(200)
  removeUser(@Param('id') id: string) {
    return {
      message: `L'utilisateur avec l'ID ${id} a été supprimé`,
      id: Number(id),
    };
  }

  @Patch(':id')
  @HttpCode(200)
  patchUser(@Param('id') id: string, @Body() updateData: UpdateUserDto) {
    return {
      message: `Profil de l'utilisateur ${id} mis à jour`,
      ...updateData,
    };
  }
}
