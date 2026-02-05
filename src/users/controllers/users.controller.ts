/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, HttpCode, Param, Patch, Post } from '@nestjs/common';

@Controller('users')
export class UsersController {
    @Get()
    @HttpCode(200)
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
    oneUserById(@Param('id') id: string) {
        return {
            id: id,
            name: 'Happy Hogan',
            email: 'happy.hogan@avengers.com',
            role: 'user',
        }
    }

    @Post()
    @HttpCode(201)
    newUser(@Body() userData: { id: number, name: string, email: string, role: string }) {
        return userData
    }

    @Patch(':id')
    @HttpCode(204)
    updateUser(@Param('id') id: string, @Body() newData: { name?: string, email?: string, role?: string }) {
        return { id, ...newData }
    }

    @Delete(':id')
    @HttpCode(200)
    deleteUser(@Param('id') id: string) {
        return `User with id ${id} deleted !`;
    }
}
