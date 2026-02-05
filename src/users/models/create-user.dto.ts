import { IsEmail, IsNotEmpty, IsNumber, IsString } from 'class-validator';

/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unsafe-call */


export class CreateUserDto {

    @IsNumber()
    id: number;

    @IsNotEmpty()
    name: string;

    @IsEmail()
    email: string;

    @IsString()
    role: string;
}