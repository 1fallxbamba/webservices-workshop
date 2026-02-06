import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreatePartnerDTO {
  @IsNumber()
  @ApiProperty({
    required: true,
    description: 'Unique identifier of the partner',
    example: 1,
  })
  id: number;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    required: true,
    description: 'Full name of the partner',
    example: 'John Doe',
  })
  name: string;

  @IsEmail()
  @ApiProperty({
    required: true,
    description: 'Email address of the partner',
    example: 'john.doe@example.com',
  })
  email: string;

  @IsNumber()
  @ApiProperty({
    required: true,
    description: 'Duration of the partnership in years',
    example: 3,
  })
  partnerDuration: number;
}
