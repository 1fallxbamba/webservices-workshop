import { IsEmail, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class UpdateUserDto {
    name?: string;
    email?: string;
    role?: string;
}