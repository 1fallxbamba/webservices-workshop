/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable prettier/prettier */

/*import { IsNumber, IsString } from "class-validator";

export class CreatePlaylistDto {

    @IsNumber()
    id: number;

    @IsString()
    name: string;

    @IsString()
    description: string
}*/

/* eslint-disable prettier/prettier */

import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString } from "class-validator";

export class CreatePlaylistDto {

    @IsNumber()
    @ApiProperty(
        {
            required: true,
            description: 'The unique identifier of the playlist being created',
            example: 7
        }
    )
    id: number;

    @IsString()
    @ApiProperty(
        {
            required: true,
            description: 'The name of the playlist being created',
            example: 'Chill'
        }
    )
    name: string;

    @IsString()
    @ApiProperty(
        {
            required: false,
            description: 'The description of the playlist being created',
            example: 'A collection of chill movies'
        }
    )
    description: string
}