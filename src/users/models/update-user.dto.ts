/* eslint-disable prettier/prettier */
import { ApiProperty } from "@nestjs/swagger";

export class UpdateUserDto {


    @ApiProperty(
        {
            required: false, 
            description: 'The name of the user',
            example: 'John Doe'
        })
    name?: string;

    @ApiProperty(
        {
            required: false, 
            description: 'The email address of the user',
            example: 'john.doe@example.com'
        })
    email?: string;

    @ApiProperty(
        {
            required: false, 
            description: 'The role of the user',
            example: 'admin'
        })
    role?: string;
}