import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateUserDto {
    @IsNumber()
    @ApiProperty({
        required: true,
        description: 'The unique identifier  of the user being created',
        example: 7,
    })  
    id: number;
    @IsNotEmpty()
    @ApiProperty({
        required: true,
        description: 'The name of the user being created',
        example: 'John Doe',
    })
    name: string;

    @IsEmail()
    @ApiProperty({
        required: true,
        description: 'The email of the user being created',
        example: 'john.doe@example.com',
    })
    email: string;

    @ApiProperty({
        required: false,
        description: 'The role of the user being created, default to "users" ',
        example: 'admin',
    })
    @IsString()
    role: string;
}
