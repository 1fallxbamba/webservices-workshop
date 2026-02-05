/* eslint-disable prettier/prettier */
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

@Controller('partners')
export class PartnersController {
  @Get()
  @HttpCode(200)
  allPartners() {
    return [
      {
        id: 1,
        companyName: 'Tech Solutions',
        type: 'Gold',
        contactEmail: 'contact@techsol.com',
      },
      {
        id: 2,
        companyName: 'Global Logistics',
        type: 'Silver',
        contactEmail: 'info@globallog.com',
      },
    ];
  }

  @Get(':id')
  @HttpCode(200)
  getOnePartner(@Param('id') id: string) {
    return {
      id: Number(id),
      companyName: 'Innovation Hub',
      type: 'Premium',
      contactEmail: 'hello@innovation.io',
    };
  }

  @Post()
  @HttpCode(201)
  createPartner(
    @Body()
    partnerData: {
      companyName: string;
      type: string;
      contactEmail: string;
    },
  ) {
    return {
      id: Date.now(), 
      ...partnerData,
      status: 'active',
    };
  }

  @Delete(':id')
  @HttpCode(200)
  removePartner(@Param('id') id: string) {
    return {
      message: `Le partenaire avec l'ID ${id} a été retiré du système`,
      id: Number(id),
    };
  }

  @Patch(':id')
  @HttpCode(200)
  updatePartner(
    @Param('id') id: string,
    @Body()
    updateData: {
      companyName?: string;
      type?: string;
      contactEmail?: string;
    },
  ) {
    return {
      message: `Informations du partenaire ${id} mises à jour`,
      ...updateData,
    };
  }
}
