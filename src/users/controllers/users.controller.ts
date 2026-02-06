/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post } from '@nestjs/common';
import { CreateUserDto } from '../models/create-user.dto';
import { UpdateUserDto } from '../models/update-user.dto';
import { ApiTags, ApiOperation, ApiResponse, ApiParam, ApiBody } from '@nestjs/swagger';

@ApiTags('Users')
@Controller('users')
export class UsersController {
    @Get()
    @HttpCode(200)
    @ApiOperation({ 
        summary: 'Get all users',
        description: 'Retrieves a list of all registered users'
    })
    @ApiResponse({ 
        status: 200, 
        description: 'List of users retrieved successfully',
        schema: {
            type: 'array',
            items: {
                type: 'object',
                properties: {
                    id: { type: 'number', example: 1 },
                    name: { type: 'string', example: 'Bamba Fall' },
                    email: { type: 'string', example: 'bamba.fall@world.com' },
                    role: { type: 'string', example: 'admin' }
                }
            }
        }
    })
    allUsers() {
        return [
            {
                id: 1,
                name: 'Bamba Fall',
                email: 'bamba.fall@world.com',
                role: 'admin',
            },
            {
                id: 2,
                name: 'Tony Stark',
                email: 'tony.stark@avengers.com',
                role: 'user',
            },
            {
                id: 3,
                name: 'Pepper Potts',
                email: 'pepper.potts@avengers.com',
                role: 'user',
            },
        ]
    }

    @Get(':id')
    @HttpCode(200)
    @ApiOperation({ 
        summary: 'Get a user by ID',
        description: 'Retrieves detailed information about a specific user'
    })
    @ApiParam({ 
        name: 'id', 
        description: 'The unique identifier of the user',
        example: '1'
    })
    @ApiResponse({ 
        status: 200, 
        description: 'User found and returned successfully',
        schema: {
            type: 'object',
            properties: {
                id: { type: 'string', example: '1' },
                name: { type: 'string', example: 'Happy Hogan' },
                email: { type: 'string', example: 'happy.hogan@avengers.com' },
                role: { type: 'string', example: 'user' }
            }
        }
    })
    @ApiResponse({ status: 404, description: 'User not found' })
    oneUserById(@Param('id') id: string) {
        return {
            id: id,
            name: 'Happy Hogan',
            email: 'happy.hogan@avengers.com',
            role: 'user',
        }
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    @ApiOperation({ 
        summary: 'Create a new user',
        description: 'Registers a new user in the system'
    })
    @ApiBody({ type: CreateUserDto })
    @ApiResponse({ 
        status: 201, 
        description: 'User created successfully',
        type: CreateUserDto
    })
    @ApiResponse({ status: 400, description: 'Invalid input data or validation failed' })
    @ApiResponse({ status: 409, description: 'User with this email already exists' })
    newUser(@Body() userData: CreateUserDto) {
        return userData;
    }

    @Patch(':id')
    @HttpCode(204)
    @ApiOperation({ 
        summary: 'Update a user',
        description: 'Updates specific fields of an existing user'
    })
    @ApiParam({ 
        name: 'id', 
        description: 'The unique identifier of the user to update',
        example: '1'
    })
    @ApiBody({ type: UpdateUserDto })
    @ApiResponse({ status: 204, description: 'User updated successfully' })
    @ApiResponse({ status: 404, description: 'User not found' })
    @ApiResponse({ status: 400, description: 'Invalid input data or validation failed' })
    updateUser(@Param('id') id: string, @Body() newData: UpdateUserDto) {
        return { id, ...newData }
    }

    @Delete(':id')
    @HttpCode(200)
    @ApiOperation({ 
        summary: 'Delete a user',
        description: 'Removes a user from the system'
    })
    @ApiParam({ 
        name: 'id', 
        description: 'The unique identifier of the user to delete',
        example: '1'
    })
    @ApiResponse({ 
        status: 200, 
        description: 'User deleted successfully',
        schema: {
            type: 'string',
            example: 'User with id 1 deleted !'
        }
    })
    @ApiResponse({ status: 404, description: 'User not found' })
    deleteUser(@Param('id') id: string) {
        return `User with id ${id} deleted !`;
    }
}
