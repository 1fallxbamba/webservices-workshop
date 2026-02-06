import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty } from 'class-validator';

export class UpdateUserDto {
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
  readonly password?: string;
  readonly role?: string;
}
