import { IsEmail, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class UpdatePartenerDto {
    name?:string
    email?:string;
}