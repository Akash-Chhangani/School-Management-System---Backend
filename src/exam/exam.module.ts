import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ExamService } from './exam.service';
import { ExamController } from './exam.controller';
import { Exam, ExamSchema } from './schemas/exam.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Exam.name, schema: ExamSchema }])],
  providers: [ExamService],
  controllers: [ExamController]
})
export class ExamModule {}
