import { PartialType } from '@nestjs/mapped-types';
import { CreatePartnerDto } from './create-partner.dto';
import { ApiProperty } from '@nestjs/swagger';

export class UpdatePartnerDto extends PartialType(CreatePartnerDto) {

    @ApiProperty({
        required: false,
        description: 'The unique identifier of the partner being updated',
        example: 7,
    })  
    id?: number;
    
    @ApiProperty({
        required: false,
        description: 'The name of the partner being updated',
        example: 'Acme Corporation',
    })
    name?: string;
    
    @ApiProperty({
        required: false,
        description: 'The website URL of the partner being updated',
        example: 'https://www.acme.com',
    })
    website?: string;

    
}
