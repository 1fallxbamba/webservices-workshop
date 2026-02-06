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
import { PartnersService } from '../services/partners.service';
import { CreatePartnerDto } from '../dto/create-partner.dto';
import { UpdatePartnerDto } from '../dto/update-partner.dto';
import { ApiBadRequestResponse, ApiCreatedResponse, ApiNoContentResponse, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Endpoint related to partners resources')
@Controller('partners')
export class PartnersController {
  constructor(private readonly partnersService: PartnersService) {}

  @ApiResponse({ 
    status: 201,
     description: 'return array  of all partners', 
     type: 'array',
      schema: {
        example: [
          {
            id: 1,
            name: 'Partner 1',
            description: 'Description of Partner 1',
          },
        ],
      },
    })
  // POST /partners
  @ApiCreatedResponse({
    description: 'The record has been successfully created.',
    type: CreatePartnerDto,
  })
   @ApiBadRequestResponse({
    description: 'Bad Request.',
  })
  @Post()
  @HttpCode(201)
  create(@Body() createPartnerDto: CreatePartnerDto) {
    return this.partnersService.create(createPartnerDto);
  }

  // GET /partners
  @Get()
  findAll() {
    return this.partnersService.findAll();
  }
  @ApiParam({ name: 'id', description: 'ID of the partner to retrieve', example: 1 })
  // GET /partners/:id
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.partnersService.findOne(+id);
  }

  // PATCH /partners/:id
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updatePartnerDto: UpdatePartnerDto,
  ) {
    return this.partnersService.update(+id, updatePartnerDto);
  }
  @ApiNoContentResponse({
    description: 'The record has been successfully deleted.',
  })
  @ApiBadRequestResponse({
    description: 'Bad Request.',
  })
  // DELETE /partners/:id
  @Delete(':id')
  @HttpCode(204)
  remove(@Param('id') id: string) {
    return this.partnersService.remove(+id);
  }
}
