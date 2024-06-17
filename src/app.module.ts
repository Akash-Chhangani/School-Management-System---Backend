import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SubjectModule } from './subject/subject.module';
import { ExamModule } from './exam/exam.module';

import { MulterModule } from '@nestjs/platform-express';
import { StudentModule } from './student/student.module';
import { ClassesModule } from './classes/classes.module';
import { ClasssubjectmappingModule } from './classsubjectmapping/classsubjectmapping.module';

@Module({
  // imports: [
  //   MongooseModule.forRoot('mongodb://localhost:27017/AMR'),
  //   MulterModule.register({ dest: './uploads' }),
  //   SubjectModule,
  //   ExamModule,
  //   StudentModule,
  // ],
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/AMR'),
    MulterModule.register({ dest: './uploads' }),
    SubjectModule,
    ExamModule,
    StudentModule,
    ClassesModule,
    ClasssubjectmappingModule
  ],
})
export class AppModule {}
