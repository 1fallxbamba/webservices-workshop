import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

/* eslint-disable prettier/prettier */
export class CreatePlaylistDto {

    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    @IsNumber()
    id: number;

    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    @IsNotEmpty()
    name: string;

    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    @IsNumber()
    nomberMovie: number;

    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    @IsString()
    title: string;
}