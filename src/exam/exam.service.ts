import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Exam, ExamDocument } from './schemas/exam.schema';
import { CreateExamDto } from './dto/create-exam.dto';

@Injectable()
export class ExamService {
  constructor(@InjectModel(Exam.name) private examModel: Model<ExamDocument>) {}

  async create(createExamDto: CreateExamDto): Promise<Exam> {
    const createdExam = new this.examModel(createExamDto);
    return createdExam.save();
  }

  async findAll(): Promise<Exam[]> {
    return this.examModel.find().exec();
  }

  async update(id: string, updateExamDto: CreateExamDto): Promise<Exam> {
    const existingExam = await this.examModel
      .findByIdAndUpdate(id, updateExamDto, { new: true })
      .exec();
    if (!existingExam) {
      throw new NotFoundException(`Exam with ID ${id} not found`);
    }
    return existingExam;
  }

  async remove(id: string): Promise<Exam> {
    const deletedExam = await this.examModel.findByIdAndDelete(id).exec();
    if (!deletedExam) {
      throw new NotFoundException(`Exam with ID ${id} not found`);
    }
    return deletedExam;
  }
}
