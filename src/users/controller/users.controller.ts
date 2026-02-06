import { Body, Controller, Delete, Get, HttpCode, Param, Patch, Post } from '@nestjs/common';
import { CreateUserDto } from '../models/create-user.dto';
import { UpdateUserDto } from '../models/update-user.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Endpoint related to users')
@Controller('users')
export class UsersController {
    @Get()
    @HttpCode(200)
    allUsers() {
        return [
            {
                id: 1,
                name: 'paulBiya',
                email: 'popol@getMaxListeners.com',
                role: 'PR'
            },
             {
                id:2,
                name: 'paulBiya',
                email: 'popol@getMaxListeners.com',
                role: 'PR'
            }
        ]
    }

    @Get(':id')
    @HttpCode(200)
    oneusersById(@Param('id') id: string)
    {
        return {
            id:id,
            name: 'paulBiya',
            email: 'popol@getMaxListeners.com',
            role: 'PR'
        }
    }

    @Post()
    @HttpCode(201)
    newUser(@Body() userData:CreateUserDto)
    {
        return userData;
    }

    @Patch()
    @HttpCode(204)
    updateUser(@Param('id') id: string,@Body() newData:UpdateUserDto)
    {
        return{id, ...newData}
    }

    @Delete(':id')
    @HttpCode(204)
    deleteOneUser(@Param('id') id: string) {
        return `Movie with id ${id} deleted !`;
       // return The movie has been deleted
    }
}

