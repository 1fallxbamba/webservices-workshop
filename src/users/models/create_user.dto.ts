import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsPhoneNumber,
  IsString,
} from 'class-validator';

export class CreateUserDTO {
  @IsNumber()
  @ApiProperty({
    required: true,
    description: 'Unique identifier of the user',
    example: 1,
  })
  id: number;

  @IsNotEmpty()
  @ApiProperty({
    required: true,
    description: 'Full name of the user',
    example: 'Alice Dupont',
  })
  name: string;

  @IsEmail()
  @ApiProperty({
    required: true,
    description: 'Email address of the user (optional)',
    example: 'alice.dupont@example.com',
  })
  email?: string;

  @IsPhoneNumber()
  @ApiProperty({
    required: false,
    description: 'Phone number of the user (optional)',
    example: '+33612345678',
  })
  phone?: string;

  @IsString()
  @ApiProperty({
    required: false,
    description: 'Role of the user in the system',
    example: 'admin',
  })
  role: string;
}
