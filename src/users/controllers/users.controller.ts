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
import { CreateUserDTO } from '../models/create_user.dto';
import { UpdateUserDTO } from '../models/update_user.dto';

@Controller('users')
export class UsersController {
  @Get()
  @HttpCode(200)
  allUsers() {
    return [
      {
        id: 1,
        name: 'PIERRE',
        email: 'pierre_rubens@gmail.com',
        phone: '+33701452368',
        role: 'premium',
      },
      {
        id: 2,
        name: 'ALALOU',
        email: 'alalou.miriam@gmail.com',
        phone: '+33678513425',
        role: 'standard',
      },
      {
        id: 3,
        name: 'DUPOND',
        email: 'monique.dupond@gmail.com',
        phone: '+33645826145',
        role: 'admin',
      },
    ];
  }

  @Get(':id')
  @HttpCode(200)
  oneUserById(@Param('id') id: string) {
    return {
      id: id,
      name: 'DUPOND',
      email: 'monique.dupond@gmail.com',
      phone: '+33645826145',
      role: 'password',
    };
  }

  @Post()
  @HttpCode(201)
  newUser(
    @Body()
    newData: CreateUserDTO,
  ) {
    return {
      success: 'Post : ok',
      user: newData,
    };
  }

  @Patch(':id')
  @HttpCode(200)
  updateUser(
    @Param('id') id: string,
    @Body()
    updateData: UpdateUserDTO,
  ) {
    return {
      success: 'Patch : ok',
      id: id,
      user: updateData,
    };
  }

  @Delete(':id')
  @HttpCode(204)
  deleteUser(@Param('id') id: string) {
    return id;
  }
}
