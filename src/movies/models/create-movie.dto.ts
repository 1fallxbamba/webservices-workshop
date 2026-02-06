import { IsEmpty, IsNumber, isNumber } from "class-validator";

export class CreateMovieDto
{
    @IsNumber()
    id:number;

    @IsEmpty()
    title:string

    @IsEmpty()
    directotCut:string;

    @IsEmpty()
    releaseYear:string;
}