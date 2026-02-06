import { IsEmail, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class UpdatePlaylistDto {
    name?: string;
    nomberMovie?: number;
    title?: string;
}