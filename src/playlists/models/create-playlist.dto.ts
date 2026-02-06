import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

/* eslint-disable prettier/prettier */
export class CreatePlaylistDto {

    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    @IsNumber()
    @ApiProperty(
    {
        required: true,
        description: 'The unique identifier of the playlist being created',
        example: 7
    })
    id: number;

    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    @IsNotEmpty()
    @ApiProperty(
        {
            required: true,
            description: 'The name of the playlist being created',
            example: 'Chill'
        }
    )
    name: string;

    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    @IsNumber()
    @ApiProperty(
    {
        required: true,
        description: 'number movies on playlist',
        example: 5
    })
    nomberMovie: number;

    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    @IsString()
    @ApiProperty(
        {
            required: false,
            description: 'The description of the playlist being created',
            example: 'A collection of chill movies'
        }
    )
    title: string;
}