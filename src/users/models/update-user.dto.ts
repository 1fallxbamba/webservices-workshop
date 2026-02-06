import { ApiProperty } from '@nestjs/swagger';

/* eslint-disable prettier/prettier */
export class UpdateUserDto {

    @ApiProperty(
        {
            required: false,
            description: 'The new name of the user being updated',
            example: 'Anthony Stark'
        }
    )
    name?: string;

    @ApiProperty(
        {
            required: false,
            description: 'The new email of the user being updated',
            example: 'anthony-stark-new@si.us'
        }
    )
    email?: string;

    @ApiProperty(
        {
            required: false,
            description: "The new role of the user being updated",
            example: 'superadmin'
        }
    )
    role?: string;
}