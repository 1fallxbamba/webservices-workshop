import { Body, Controller, Delete, Get, HttpCode, Param, Patch, Post } from '@nestjs/common';
import { CreatePartenerDto } from '../models/create-partener.dto';
import { UpdatePartenerDto } from '../models/update-partener.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Endpoint related to parteners')
@Controller('parteners')
export class PartnersController {
    @Get()
        @HttpCode(200)
        allParteners() {
            return [
                {
                    id:1,
                    name:'UPC',
                    email:'2025@gmail.com'
                },
                 {
                    id:2,
                    name:'UPC',
                    email:'2025@gmail.com'
                }
            ]
        }
    
        @Get(':id')
        @HttpCode(200)
        onePartenerById(@Param('id') id: string)
        {
            return {
                id:1,
                name:'UPC',
                email:'2025@gmail.com'
            }
        }
    
        @Post()
        @HttpCode(201)
        newPartener(@Body() partenerData: CreatePartenerDto)
        {
            return partenerData;
        }
    
        @Patch()
        @HttpCode(204)
        updatePartener(@Param('id') id: string,@Body() newData:{name?: string,email?:string})
        {
            return{id, ...newData}
        }
    
        @Delete(':id')
        @HttpCode(204)
        deleteOnePartener(@Param('id') id: string) {
            return `Movie with id ${id} deleted !`;
           // return The movie has been deleted
        }
}
