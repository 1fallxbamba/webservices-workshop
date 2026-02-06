import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsNumber, IsString } from 'class-validator';
// eslint-disable-next-line @typescript-eslint/no-unsafe-call

export class UpdatePartnerDTO {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    required: false,
    description: 'New full name of the partner',
    example: 'John Doe',
  })
  name: string;

  @IsEmail()
  @ApiProperty({
    required: false,
    description: 'New email address of the partner',
    example: 'john.doe@example.com',
  })
  email: string;

  @IsNumber()
  @ApiProperty({
    required: false,
    description: 'New duration of the partnership in years',
    example: 3,
  })
  partnerDuration: number;
}
