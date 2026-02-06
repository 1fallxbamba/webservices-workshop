import { IsEmail, IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unsafe-call */


export class CreateUserDto {

    @IsNumber()
    @ApiProperty(
        {
            required: true, 
            description: 'The unique identifier of the user',
            example: 1
        })
    id: number;

    @IsNotEmpty()
    @ApiProperty(
        {
            required: true, 
            description: 'The name of the user',
            example: 'John Doe'
        })
    name: string;

    @IsEmail()
    @ApiProperty(
        {
            required: true, 
            description: 'The email address of the user',
            example: 'john.doe@example.com'
        })
    email: string;

    @IsString()
    @ApiProperty(
        {
            required: false, 
            description: 'The role of the user',
            example: 'admin'
        })
    role: string;
}