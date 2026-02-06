import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsNumber, IsString } from 'class-validator';

/* eslint-disable prettier/prettier */
export class CreateUserDto {

    @IsNumber()
    @ApiProperty({
        required:true,
        description:'the unique of the user',
        example:7
    })
    id: number;

    @IsNotEmpty()
     @ApiProperty({
        required:true,
        description:'the name of user',
        example:'pascal'
    })
    name: string;

    @IsEmail()
     @ApiProperty({
        required:true,
        description:'email user',
        example:'......@gmail.com'
    })
    email: string;

    @IsString()
     @ApiProperty({
        required:false,
        description:'the role of the user',
        example:'actor'
    })
    role: string;
}