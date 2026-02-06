import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreatePlaylistDTO {
  @IsNumber()
  @ApiProperty({
    required: true,
    description: 'Unique identifier of the playlist',
    example: 1,
  })
  id: number;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    required: true,
    description: 'Name of the playlist',
    example: 'Top viewed 2026',
  })
  name: string;

  @IsString()
  @ApiProperty({
    required: true,
    description: 'Type or category of the playlist',
    example: 'Thriller',
  })
  type: string;
}
