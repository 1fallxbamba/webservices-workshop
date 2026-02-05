/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable prettier/prettier */

import { IsNumber, IsString } from "class-validator";

export class CreatePlaylistDto {

    @IsNumber()
    id: number;

    @IsString()
    name: string;

    @IsString()
    description: string
}