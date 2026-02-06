/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable prettier/prettier */

import { IsNumber, IsString } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class CreatePlaylistDto {

    @IsNumber()
    @ApiProperty(
        {
            required: true, 
            description: 'The unique identifier of the playlist',
            example: 1
        })
    id: number;

    @IsString()
    @ApiProperty(
        {
            required: true, 
            description: 'The name of the playlist',
            example: 'My Playlist'
        })
    name: string;

    @IsString()
    @ApiProperty(
        {
            required: false, 
            description: 'The description of the playlist',
            example: 'A collection of my favorite songs'
        })
    description: string;
}