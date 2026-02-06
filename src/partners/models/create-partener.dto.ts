import {IsEmail,IsNumber, IsNotEmpty} from 'class-validator';

export class CreatePartenerDto
{
    @IsNumber()
    id:number;

    @IsNotEmpty()
    name:string

    @IsEmail()
    email:string;
}