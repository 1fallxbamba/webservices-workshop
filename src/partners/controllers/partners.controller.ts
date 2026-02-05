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

@Controller('partners')
export class PartnersController {
  @Get()
  @HttpCode(200)
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
  newPartner(
    @Body()
    newData: CreatePartnerDTO,
  ) {
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
