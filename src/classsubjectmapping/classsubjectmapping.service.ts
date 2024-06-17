




// import {
//   BadRequestException,
//   Injectable,
//   NotFoundException,
// } from '@nestjs/common';
// import { CreateClasssubjectmappingDto } from './dto/create-classsubjectmapping.dto';
// import { UpdateClasssubjectmappingDto } from './dto/update-classsubjectmapping.dto';
// import { ClassSubjectmapping } from './schemas/classsubmap.schema';
// import { InjectModel } from '@nestjs/mongoose';
// import mongoose, { Model } from 'mongoose';

// @Injectable()
// export class ClasssubjectmappingService {
//   [x: string]: any;
//   constructor(
//     @InjectModel(ClassSubjectmapping.name)
//     private classSubjectsMappingModel: Model<ClassSubjectmapping>,
//   ) {}

//   async create(
//     createClassStudentsMappingDto: CreateClasssubjectmappingDto,
//   ): Promise<ClassSubjectmapping[]> {
//     const { classId, subjectIds } = createClassStudentsMappingDto;

//     const createdMappings: ClassSubjectmapping[] = [];

//     for (const subjectIdObj of subjectIds) {
//       const { id: subjectId } = subjectIdObj;
//       const newMapping = new this.classSubjectsMappingModel({
//         classId,
//         subjectId,
//       });
//       const savedMapping = await newMapping.save();
//       createdMappings.push(savedMapping);
//     }

//     return createdMappings;
//   }

//   // private getClassSubjectMap(classSubjectMappings: ClassSubjectmapping[]) {
//   //   const classSubjectsMap = new Map();

//   //   classSubjectMappings.forEach((mapping) => {
//   //     const classId = mapping.classId._id;
//   //     const parentId = mapping._id;
//   //     const className = mapping.classId.classname;
//   //     const subjectId = mapping.subjectId._id;
//   //     const subjectName = mapping.subjectId.subjectName;

//   //     if (!classSubjectsMap.has(classId)) {
//   //       classSubjectsMap.set(classId, {
//   //         classId,
//   //         parentId,
//   //         className,
//   //         subjects: [],
//   //       });
//   //     }

//   //     classSubjectsMap.get(classId).subjects.push({ subjectId, subjectName });
//   //   });

//   //   return Array.from(classSubjectsMap.values());
//   // }

//   async findAll(): Promise<any[]> {
//     const classSubjectMappings = await this.classSubjectsMappingModel.find()
//       .populate('classId')
//       .populate('subjectId');

//     return this.getClassSubjectMap(classSubjectMappings);
//   }

//   async updateById(
//     id: string,
//     updateClassSubjectMappingDto: UpdateClasssubjectmappingDto,
//   ): Promise<ClassSubjectmapping> {
//     const updatedMapping = await this.classSubjectsMappingModel.findByIdAndUpdate(
//       id,
//       updateClassSubjectMappingDto,
//       {
//         new: true,
//         runValidators: true,
//       },
//     ).exec();

//     if (!updatedMapping) {
//       throw new NotFoundException('Mapping not found');
//     }

//     return updatedMapping;
//   }

//   async findById(id: string): Promise<ClassSubjectmapping> {
//     if (!mongoose.isValidObjectId(id)) {
//       throw new BadRequestException('Invalid ID format. Please enter a correct ID.');
//     }

//     const subjectMapping = await this.classSubjectsMappingModel.findById(id).exec();
//     if (!subjectMapping) {
//       throw new NotFoundException('Mapping not found');
//     }
//     return subjectMapping;
//   }

//   async deleteById(id: string): Promise<ClassSubjectmapping> {
//     const deletedMapping = await this.classSubjectsMappingModel.findByIdAndDelete(id).exec();

//     if (!deletedMapping) {
//       throw new NotFoundException('Mapping not found');
//     }

//     return deletedMapping;
//   }
// }


import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateClasssubjectmappingDto } from './dto/create-classsubjectmapping.dto';
import { UpdateClasssubjectmappingDto } from './dto/update-classsubjectmapping.dto';
import { ClassSubjectmapping } from './schemas/classsubmap.schema';
import { InjectModel } from '@nestjs/mongoose';
import mongoose, { Model } from 'mongoose';

@Injectable()
export class ClasssubjectmappingService {
  constructor(
    @InjectModel(ClassSubjectmapping.name)
    private classSubjectsMappingModel: Model<ClassSubjectmapping>,
  ) {}

  async create(
    createClassStudentsMappingDto: CreateClasssubjectmappingDto,
  ): Promise<ClassSubjectmapping[]> {
    const { classId, subjectIds } = createClassStudentsMappingDto;

    const createdMappings: ClassSubjectmapping[] = [];

    for (const subjectIdObj of subjectIds) {
      const { id: subjectId } = subjectIdObj;
      const newMapping = new this.classSubjectsMappingModel({
        classId,
        subjectId,
      });
      const savedMapping = await newMapping.save();
      createdMappings.push(savedMapping);
    }

    return createdMappings;
  }

  // private getClassSubjectMap(classSubjectMappings: ClassSubjectmapping[]) {
  //   const classSubjectsMap = new Map();

  //   classSubjectMappings.forEach((mapping) => {
  //     const classId = mapping.classId._id;
  //     const parentId = mapping._id;
  //     const className = mapping.classId.className;
  //     const subjectId = mapping.subjectId._id;
  //     const subjectName = mapping.subjectId.subjectName;

  //     if (!classSubjectsMap.has(classId)) {
  //       classSubjectsMap.set(classId, {
  //         classId,
  //         parentId,
  //         className,
  //         subjects: [],
  //       });
  //     }

  //     classSubjectsMap.get(classId).subjects.push({ subjectId, subjectName });
  //   });

  //   return Array.from(classSubjectsMap.values());
  // }

  // async findAll(): Promise<any[]> {
  //   const classSubjectMappings = await this.classSubjectsMappingModel.find()
  //     .populate('classId')
  //     .populate('subjectId');

  //   return this.getClassSubjectMap(classSubjectMappings);
  // }

  // private getClassSubjectMap(classSubjectMappings: ClassSubjectmapping[]) {
  //   const classSubjectsMap = new Map();

  //   classSubjectMappings.forEach((mapping) => {
  //     const classId = mapping.classId._id;
  //     const parentId = mapping._id;
  //     const className = mapping.classId.className;
  //     const subjectId = mapping.subjectId._id;
  //     const subjectName = mapping.subjectId.subjectName;

  //     if (!classSubjectsMap.has(classId)) {
  //       classSubjectsMap.set(classId, {
  //         classId,
  //         parentId,
  //         className,
  //         subjects: [],
  //       });
  //     }

  //     classSubjectsMap.get(classId).subjects.push({ subjectId, subjectName });
  //   });

  //   return Array.from(classSubjectsMap.values());
  // }

  async findAll(): Promise<any[]> {
    const classSubjectMappings = await this.classSubjectsMappingModel.find()
      .populate('classId')
      .populate('subjectId');

    // return this.getClassSubjectMap(classSubjectMappings);
    return this.classSubjectsMappingModel.find()
    .populate('classId')
    .populate('subjectId');
  }


  async updateById(
    id: string,
    updateClassSubjectMappingDto: UpdateClasssubjectmappingDto,
  ): Promise<ClassSubjectmapping> {
    const updatedMapping = await this.classSubjectsMappingModel.findByIdAndUpdate(
      id,
      updateClassSubjectMappingDto,
      {
        new: true,
        runValidators: true,
      },
    ).exec();

    if (!updatedMapping) {
      throw new NotFoundException('Mapping not found');
    }

    return updatedMapping;
  }

  async findById(id: string): Promise<ClassSubjectmapping> {
    if (!mongoose.isValidObjectId(id)) {
      throw new BadRequestException('Invalid ID format. Please enter a correct ID.');
    }

    const subjectMapping = await this.classSubjectsMappingModel.findById(id).exec();
    if (!subjectMapping) {
      throw new NotFoundException('Mapping not found');
    }
    return subjectMapping;
  }

  async deleteById(id: string): Promise<ClassSubjectmapping> {
    const deletedMapping = await this.classSubjectsMappingModel.findByIdAndDelete(id).exec();

    if (!deletedMapping) {
      throw new NotFoundException('Mapping not found');
    }

    return deletedMapping;
  }
}

