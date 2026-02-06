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

@Controller('partners')
export class PartnersController {
  constructor(private readonly partnersService: PartnersService) {}

  // POST /partners
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

  // DELETE /partners/:id
  @Delete(':id')
  @HttpCode(204)
  remove(@Param('id') id: string) {
    return this.partnersService.remove(+id);
  }
}
