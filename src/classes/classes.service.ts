import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Classes, ClassesDocument } from './schemas/classes.schema';
import { CreateClassDto } from './dto/create-class.dto';

@Injectable()
export class ClassesService {
  constructor(
    @InjectModel(Classes.name) private classesModel: Model<ClassesDocument>,
  ) {}

  async create(createClassDto: CreateClassDto): Promise<Classes> {
    const createdClass = new this.classesModel(createClassDto);
    return createdClass.save();
  }

  async findAll(): Promise<Classes[]> {
    return this.classesModel.find().exec();
  }

  async findOne(id: string): Promise<Classes> {
    const classRecord = await this.classesModel.findById(id).exec();
    if (!classRecord) {
      throw new NotFoundException(`Class with ID ${id} not found`);
    }
    return classRecord;
  }

  async update(id: string, updateClassDto: CreateClassDto): Promise<Classes> {
    const updatedClass = await this.classesModel
      .findByIdAndUpdate(id, updateClassDto, { new: true })
      .exec();
    if (!updatedClass) {
      throw new NotFoundException(`Class with ID ${id} not found`);
    }
    return updatedClass;
  }

  async remove(id: string): Promise<Classes> {
    const removedClass = await this.classesModel.findByIdAndDelete(id).exec();
    if (!removedClass) {
      throw new NotFoundException(`Class with ID ${id} not found`);
    }
    return removedClass;
  }
}
