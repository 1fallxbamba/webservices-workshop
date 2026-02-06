import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsPhoneNumber, IsString } from 'class-validator';

export class UpdateUserDTO {
  @IsNotEmpty()
  @ApiProperty({
    required: false,
    description: 'New full name of the user',
    example: 'Alice Dupont',
  })
  name: string;

  @IsEmail()
  @ApiProperty({
    required: false,
    description: 'New email address of the user (optional)',
    example: 'alice.dupont@example.com',
  })
  email?: string;

  @IsPhoneNumber()
  @ApiProperty({
    required: false,
    description: 'New phone number of the user (optional)',
    example: '+33612345678',
  })
  phone?: string;

  @IsString()
  @ApiProperty({
    required: false,
    description: 'New role of the user in the system',
    example: 'admin',
  })
  role: string;
}
