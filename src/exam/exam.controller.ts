import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { ExamService } from './exam.service';
import { CreateExamDto } from './dto/create-exam.dto';
import { Exam } from './schemas/exam.schema';

@Controller('exam')
export class ExamController {
  constructor(private readonly examService: ExamService) {}

  @Post()
  async create(@Body() createExamDto: CreateExamDto): Promise<Exam> {
    return this.examService.create(createExamDto);
  }

  @Get()
  async findAll(): Promise<Exam[]> {
    return this.examService.findAll();
  }
  @Put(':id')
  async update(@Param('id') id: string, @Body() updateExamDto: CreateExamDto): Promise<Exam> {
    return this.examService.update(id, updateExamDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<Exam> {
    return this.examService.remove(id);
  }
}
