// src/classes/classes.controller.ts
import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { ClassesService } from './classes.service';
import { CreateClassDto } from './dto/create-class.dto';
import { Classes } from './schemas/classes.schema';

@Controller('classes')
export class ClassesController {
  constructor(private readonly classesService: ClassesService) {}

  @Post()
  create(@Body() createClassDto: CreateClassDto): Promise<Classes> {
    return this.classesService.create(createClassDto);
  }

  @Get()
  findAll(): Promise<Classes[]> {
    return this.classesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Classes> {
    return this.classesService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateClassDto: CreateClassDto): Promise<Classes> {
    return this.classesService.update(id, updateClassDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<Classes> {
    return this.classesService.remove(id);
  }
}
