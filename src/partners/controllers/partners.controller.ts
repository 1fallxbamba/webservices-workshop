/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, HttpCode, Param, Patch, Post } from '@nestjs/common';

@Controller('partners')
export class PartnersController {
    @Get()
    @HttpCode(200)
    allPartners() {
        return [
            {
                id: 1,
                name: 'Warner Bros',
                country: 'USA',
            },
            {
                id: 2,
                name: 'Universal Pictures',
                country: 'USA',
            },
            {
                id: 3,
                name: 'Canal+',
                country: 'France',
            }
        ]
    }

    @Get(':id')
    @HttpCode(200)
    onePartnerById(@Param('id') id: string) {
        return {
            id: id,
            name: 'Canal+',
            country: 'France',
        }
    }

    @Post()
    @HttpCode(201)
    newPartner(@Body() partnerData: { id: number, name: string, country: string }) {
        return partnerData
    }

    @Patch(':id')
    @HttpCode(204)
    updatePartner(@Param('id') id: string, @Body() newData: { name?: string, country?: string }) {
        return { id, ...newData }
    }

    @Delete(':id')
    @HttpCode(200)
    deleteOnePartner(@Param('id') id: string) {
        return `Partner with id ${id} deleted !`;
    }

}
