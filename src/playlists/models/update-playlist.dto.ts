/* eslint-disable prettier/prettier */
import { ApiProperty } from "@nestjs/swagger";

export class UpdatePlaylistDto {

    @ApiProperty(
        {
            required: false, 
            description: 'The name of the playlist',
            example: 'My Updated Playlist'
        })
    name?: string;

    @ApiProperty(
        {
            required: false, 
            description: 'The description of the playlist',
            example: 'An updated collection of my favorite songs'
        })
    description?: string;
}
