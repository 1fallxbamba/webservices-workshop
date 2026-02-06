import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';
// eslint-disable-next-line @typescript-eslint/no-unsafe-call

export class UpdatePlaylistDTO {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    required: false,
    description: 'New name of the playlist',
    example: 'Top viewed 2026',
  })
  name: string;

  @IsString()
  @ApiProperty({
    required: false,
    description: 'New type or category of the playlist',
    example: 'Thriller',
  })
  type: string;
}
