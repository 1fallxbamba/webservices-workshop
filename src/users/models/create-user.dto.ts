/*import { IsEmail, IsNotEmpty, IsNumber, IsString } from 'class-validator';

/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unsafe-call */


/*export class CreateUserDto {

    @IsNumber()
    id: number;

    @IsNotEmpty()
    name: string;

    @IsEmail()
    email: string;

    @IsString()
    role: string;
}*/


import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsNumber, IsString } from 'class-validator';

/* eslint-disable prettier/prettier */

export class CreateUserDto {

    @IsNumber()
    @ApiProperty(
        {
            required: true,
            description: 'The unique identifier of the user being created',
            example: 7
        })
    id: number;

    @IsNotEmpty()
    @ApiProperty(
        {
            required: true,
            description: 'The name of the user being created',
            example: 'Anthony Stark'
        }
    )
    name: string;

    @IsEmail()
    @ApiProperty(
        {
            required: true,
            description: 'The email of the user being created',
            example: 'anthony.stark@marvel.com'
        })
    email: string;

    @ApiProperty(
        {
            required: false,
            description: "The role of the user being created, defaults to 'user'",
            example: 'ironman123'
        }
    )
    @IsString()
    role: string;
}