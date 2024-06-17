import { Injectable, NotFoundException } from '@nestjs/common';
import mongoose, { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Student } from './interface/student.interface';
import { UpdateStudentDto } from './dto/update-student.dto';

@Injectable()
export class StudentService {
  gfs: any;
  constructor(
    @InjectModel('Student') private readonly studentModel: Model<Student>,
  ) {}

  async create(student: Student): Promise<Student> {
    const createdStudent = new this.studentModel(student);
    return await createdStudent.save();
  }

  async findAll(): Promise<Student[]> {
    return await this.studentModel.find().exec();
  }

  async update(
    id: string,
    updateStudentDto: UpdateStudentDto,
  ): Promise<Student> {
    const student = await this.studentModel.findByIdAndUpdate(
      id,
      updateStudentDto,
      { new: true },
    );
    if (!student) {
      throw new NotFoundException('Student not found');
    }
    return student;
  }

  async delete(id: string): Promise<void> {
    const result = await this.studentModel.deleteOne({ _id: id }).exec();
    if (result.deletedCount === 0) {
      throw new NotFoundException('Student not found');
    }
  }

  async uploadFile(
    file: Express.Multer.File,
    req: any,
  ): Promise<string | boolean> {
    if (file) {
    
      const fileUrl = `${req.protocol}://${req.headers.host}/public/${file.filename}`;

      console.log('fileUrl', fileUrl);

      return fileUrl;
    } else {
      return false;
    }
  }
  async getFile(fileId: string, res:Response): Promise<any> {
    const _id = new mongoose.Types.ObjectId(fileId);
    const file = await this.gfs.find({ _id }).toArray();

    if (!file || file.length === 0) {
      throw new NotFoundException('File not found');
    }

    this.gfs.openDownloadStream(_id).pipe(res);
  }
}