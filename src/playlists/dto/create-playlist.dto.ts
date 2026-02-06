import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreatePlaylistDto {
    @IsNumber()
    @ApiProperty({
        required: true,
        description: 'The unique identifier  of the playlist being created',
        example: 7,
    })  
    id: number;

     @IsString()
     @ApiProperty({
        required: true,
        description: 'The name of the playlist being created',
        example: 'My Favorite Songs',
    })
    name: string;

    @IsString()
    @ApiProperty({
        required: true,
        description: 'The description of the playlist being created',
        example: 'A collection of my all-time favorite songs.',
    })
    description: string;
}
  
