/* eslint-disable @typescript-eslint/no-unsafe-call */
import { IsEmail, IsNotEmpty, IsNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @IsNumber()
  @ApiProperty({
    required: true,
    description: 'The unique identifier of the user',
    example: 1,
  })
  readonly id?: number;

  @IsNotEmpty()
  @ApiProperty({
    required: true,
    description: 'The username of the user',
    example: 'john_doe',
  })
  readonly username: string;
  @IsEmail()
  @ApiProperty({
    required: true,
    description: 'The email of the user',
    example: 'johndoe@gmail.com',
  })
  readonly email: string;
  readonly password?: string;
  readonly role: string;
}
