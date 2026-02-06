import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreatePartnerDTO } from '../models/createPartners.dto';
import { UpdatePartnerDTO } from '../models/updatePartners.dto';
import {
  ApiBadRequestResponse,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiParam,
  ApiTags,
} from '@nestjs/swagger';

@Controller('partners')
@ApiTags('Endpoints : Partners')
export class PartnersController {
  @Get()
  @HttpCode(200)
  @ApiOkResponse({
    description: 'List of all partners',
    schema: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          id: { type: 'number', example: 1 },
          name: { type: 'string', example: 'OCS' },
          email: {
            type: 'string',
            example: 'ocs-contact@ocs-cie.org',
            nullable: true,
          },
          partnerDuration: { type: 'number', example: 2 },
        },
      },
      example: [
        {
          id: 1,
          name: 'OCS',
          email: 'ocs-contact@ocs-cie.org',
          partnerDuration: 2,
        },
        {
          id: 2,
          name: 'Arte',
          email: 'arte-contact@arte.org',
          partnerDuration: 3,
        },
        {
          id: 3,
          name: 'BFM',
          email: 'bfm-contact@bfm.org',
          partnerDuration: 2,
        },
      ],
    },
  })
  allPartners() {
    return [
      {
        id: 1,
        name: 'OCS',
        email: 'ocs-contact@ocs-cie.org',
        partnerDuration: 2,
      },
      {
        id: 2,
        name: 'Arte',
        email: 'arte-contact@arte.org',
        partnerDuration: 3,
      },
      {
        id: 3,
        name: 'BFM',
        email: 'bfm-contact@bfm.org',
        partnerDuration: 2,
      },
    ];
  }

  @Get(':id')
  @HttpCode(200)
  @ApiParam({
    name: 'id',
    description: 'The unique identifier of the partner to retrieve',
    required: true,
  })
  @ApiOkResponse({
    description: 'The partner has been successfully retrieved',
    schema: {
      type: 'object',
      properties: {
        id: { type: 'number', example: 1 },
        name: { type: 'string', example: 'OCS' },
        email: {
          type: 'string',
          example: 'ocs-contact@ocs-cie.org',
          nullable: true,
        },
        partnerDuration: { type: 'number', example: 2 },
      },
      example: {
        id: 1,
        name: 'OCS',
        email: 'ocs-contact@ocs-cie.org',
        partnerDuration: 2,
      },
    },
  })
  @ApiBadRequestResponse({
    description: 'Invalid parameters in url, check parameters and try again.',
  })
  onePartnerById(@Param('id') id: string) {
    return {
      id: id,
      name: 'OCS',
      email: 'ocs-contact@ocs-cie.org',
      partnerDuration: 2,
    };
  }

  @Post()
  @HttpCode(201)
  @ApiCreatedResponse({
    description: 'The partner has been successfully created',
    schema: {
      type: 'object',
      properties: {
        success: { type: 'string', example: 'Post : ok' },
        partner: { $ref: '#/components/schemas/CreatePartnerDTO' },
      },
    },
  })
  @ApiBadRequestResponse({
    description: 'Invalid input data, check the payload and try again.',
  })
  newPartner(@Body() newData: CreatePartnerDTO) {
    return {
      success: 'Post : ok',
      partner: newData,
    };
  }

  @Patch(':id')
  @HttpCode(200)
  updatePartner(
    @Param('id') id: string,
    @Body()
    updateData: UpdatePartnerDTO,
  ) {
    return {
      success: 'Patch : ok',
      id: id,
      partner: updateData,
    };
  }

  @Delete(':id')
  @HttpCode(204)
  deletePartner(@Param('id') id: string) {
    return id;
  }
}
