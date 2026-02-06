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
import { 
  ApiTags, 
  ApiParam, 
  ApiOkResponse, 
  ApiCreatedResponse, 
  ApiBadRequestResponse 
} from '@nestjs/swagger';

@ApiTags('Endpoints relatifs aux partenaires')
@Controller('partners')
export class PartnersController {
  @Get()
  @HttpCode(200)
  @ApiOkResponse({ description: 'Liste des partenaires récupérée avec succès.' })
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
  @ApiParam({ name: 'id', description: 'Identifiant unique du partenaire', example: '1' })
  @ApiOkResponse({ description: 'Détails du partenaire trouvés.' })
  @ApiBadRequestResponse({ description: 'ID invalide.' })
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
  @ApiCreatedResponse({ description: 'Le partenaire a été créé avec succès.' })
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
  @ApiParam({ name: 'id', description: 'ID du partenaire à supprimer', example: '10' })
  @ApiOkResponse({ description: 'Le partenaire a été supprimé.' })
  removePartner(@Param('id') id: string) {
    return {
      message: `Le partenaire avec l'ID ${id} a été retiré du système`,
      id: Number(id),
    };
  }

  @Patch(':id')
  @HttpCode(200)
  @ApiParam({ name: 'id', description: 'ID du partenaire à mettre à jour', example: '42' })
  @ApiOkResponse({ description: 'Le partenaire a été mis à jour.' })
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