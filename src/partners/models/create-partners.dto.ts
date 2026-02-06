import { IsEmail, IsNotEmpty, IsNumber, IsString } from 'class-validator';

/* eslint-disable prettier/prettier */
export class CreatePartnersDto {

    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    @IsNumber()
    id: number;

    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    @IsNotEmpty()
    name: string;

    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    @IsEmail()
    email: string;

    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    @IsString()
    role: string;
}