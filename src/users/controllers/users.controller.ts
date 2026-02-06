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
import {
  ApiBadRequestResponse,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiParam,
  ApiTags,
} from '@nestjs/swagger';

@Controller('users')
@ApiTags('Endpoints : Users')
export class UsersController {
  @Get()
  @HttpCode(200)
  @ApiOkResponse({
    description: 'List of all users',
    schema: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          id: { type: 'number', example: 1 },
          name: { type: 'string', example: 'Alice Dupont' },
          email: {
            type: 'string',
            example: 'alice.dupont@example.com',
            nullable: true,
          },
          phone: { type: 'string', example: '+33612345678', nullable: true },
          role: { type: 'string', example: 'admin' },
        },
      },
      example: [
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
      ],
    },
  })
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
  @ApiParam({
    name: 'id',
    description: 'The unique identifier of the user to retrieve',
    required: true,
  })
  @ApiOkResponse({
    description: 'The user has been successfully retrieved',
    schema: {
      type: 'object',
      properties: {
        id: { type: 'number', example: 1 },
        name: { type: 'string', example: 'DUPOND' },
        email: {
          type: 'string',
          example: 'monique.dupond@gmail.com',
          nullable: true,
        },
        phone: { type: 'string', example: '+33645826145', nullable: true },
        role: { type: 'string', example: 'admin' },
      },
      example: {
        id: 1,
        name: 'DUPOND',
        email: 'monique.dupond@gmail.com',
        phone: '+33645826145',
        role: 'admin',
      },
    },
  })
  @ApiBadRequestResponse({
    description: 'Invalid parameters in url, check parameters and try again.',
  })
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
  @ApiCreatedResponse({
    description: 'The user has been successfully created',
    schema: {
      type: 'object',
      properties: {
        success: { type: 'string', example: 'Post : ok' },
        user: { $ref: '#/components/schemas/CreateUserDTO' },
      },
    },
  })
  @ApiBadRequestResponse({
    description: 'Invalid input data, check the payload and try again.',
  })
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
