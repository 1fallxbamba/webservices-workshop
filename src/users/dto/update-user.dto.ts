import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateUserDto extends PartialType(CreateUserDto) {
    @ApiProperty({
        required: false,
        description: 'The unique identifier  of the user being updated',
        example: 7,
    })  
    id?: number;

    @ApiProperty({
        required: false,
        description: 'The name of the user being updated',
        example: 'John Doe',
    })
    name?: string;

    @ApiProperty({
        required: false,
        description: 'The email of the user being updated',
        example: 'john.doe@example.com',
    })
    email?: string;

    @ApiProperty({
        required: false,
        description: 'The role of the user being updated',
        example: 'admin',
    })
    role?: string;


}
