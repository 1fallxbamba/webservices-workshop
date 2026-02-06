import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString, IsUrl } from 'class-validator';

export class CreatePartnerDto {
  
  @IsNumber()
  @ApiProperty({
    required: true,
    description: 'The unique identifier  of the partner being created',
    example: 7,
  })  
  id: number;
  
  @IsString()
  @ApiProperty({
    required: true,
    description: 'The name of the partner being created',
    example: 'Acme Corporation',
  })
  name: string;

  @IsUrl()
  @ApiProperty({
    required: true,
    description: 'The website URL of the partner being created',
    example: 'https://www.acme.com',
  })
  website: string;
}
