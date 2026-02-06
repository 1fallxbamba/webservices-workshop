/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, HttpCode, Param, Patch, Post } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiParam, ApiBody, ApiSecurity } from '@nestjs/swagger';

@ApiTags('Partners')
@ApiSecurity('api-auth-token')
@Controller('partners')
export class PartnersController {
    @Get()
    @HttpCode(200)
    @ApiOperation({ 
        summary: 'Get all partners',
        description: 'Retrieves a list of all content partners'
    })
    @ApiResponse({ 
        status: 200, 
        description: 'List of partners retrieved successfully',
        schema: {
            type: 'array',
            items: {
                type: 'object',
                properties: {
                    id: { type: 'number', example: 1 },
                    name: { type: 'string', example: 'Warner Bros' },
                    country: { type: 'string', example: 'USA' }
                }
            }
        }
    })
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
    @ApiOperation({ 
        summary: 'Get a partner by ID',
        description: 'Retrieves detailed information about a specific partner'
    })
    @ApiParam({ 
        name: 'id', 
        description: 'The unique identifier of the partner',
        example: '1'
    })
    @ApiResponse({ 
        status: 200, 
        description: 'Partner found and returned successfully',
        schema: {
            type: 'object',
            properties: {
                id: { type: 'string', example: '1' },
                name: { type: 'string', example: 'Canal+' },
                country: { type: 'string', example: 'France' }
            }
        }
    })
    @ApiResponse({ status: 404, description: 'Partner not found' })
    onePartnerById(@Param('id') id: string) {
        return {
            id: id,
            name: 'Canal+',
            country: 'France',
        }
    }

    @Post()
    @HttpCode(201)
    @ApiOperation({ 
        summary: 'Create a new partner',
        description: 'Adds a new content partner to the platform'
    })
    @ApiBody({
        description: 'Partner data to create',
        schema: {
            type: 'object',
            required: ['id', 'name', 'country'],
            properties: {
                id: { type: 'number', example: 4 },
                name: { type: 'string', example: 'Disney' },
                country: { type: 'string', example: 'USA' }
            }
        }
    })
    @ApiResponse({ 
        status: 201, 
        description: 'Partner created successfully',
        schema: {
            type: 'object',
            properties: {
                id: { type: 'number', example: 4 },
                name: { type: 'string', example: 'Disney' },
                country: { type: 'string', example: 'USA' }
            }
        }
    })
    @ApiResponse({ status: 400, description: 'Invalid input data' })
    newPartner(@Body() partnerData: { id: number, name: string, country: string }) {
        return partnerData
    }

    @Patch(':id')
    @HttpCode(204)
    @ApiOperation({ 
        summary: 'Update a partner',
        description: 'Updates specific fields of an existing partner'
    })
    @ApiParam({ 
        name: 'id', 
        description: 'The unique identifier of the partner to update',
        example: '1'
    })
    @ApiBody({
        description: 'Fields to update (all optional)',
        schema: {
            type: 'object',
            properties: {
                name: { type: 'string', example: 'Warner Bros Entertainment' },
                country: { type: 'string', example: 'USA' }
            }
        }
    })
    @ApiResponse({ status: 204, description: 'Partner updated successfully' })
    @ApiResponse({ status: 404, description: 'Partner not found' })
    @ApiResponse({ status: 400, description: 'Invalid input data' })
    updatePartner(@Param('id') id: string, @Body() newData: { name?: string, country?: string }) {
        return { id, ...newData }
    }

    @Delete(':id')
    @HttpCode(200)
    @ApiOperation({ 
        summary: 'Delete a partner',
        description: 'Removes a partner from the platform'
    })
    @ApiParam({ 
        name: 'id', 
        description: 'The unique identifier of the partner to delete',
        example: '1'
    })
    @ApiResponse({ 
        status: 200, 
        description: 'Partner deleted successfully',
        schema: {
            type: 'string',
            example: 'Partner with id 1 deleted !'
        }
    })
    @ApiResponse({ status: 404, description: 'Partner not found' })
    deleteOnePartner(@Param('id') id: string) {
        return `Partner with id ${id} deleted !`;
    }

}
