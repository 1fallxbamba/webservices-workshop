import { PartialType } from '@nestjs/mapped-types';
import { CreatePlaylistDto } from './create-playlist.dto';
import { ApiProperty } from '@nestjs/swagger';

export class UpdatePlaylistDto extends PartialType(CreatePlaylistDto) {
    @ApiProperty({
        required: false,
        description: 'The unique identifier of the playlist being updated',
        example: 7,
    })  
    id?: number;

    @ApiProperty({
        required: false,
        description: 'The name of the playlist being updated',
        example: 'My Favorite Songs',
    })
    name?: string;

    @ApiProperty({
        required: false,
        description: 'The description of the playlist being updated',
        example: 'A collection of my all-time favorite songs.',
    })
    description?: string;
    
}
