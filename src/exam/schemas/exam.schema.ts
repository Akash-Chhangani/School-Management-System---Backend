import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ExamDocument = Exam & Document; // Ensure ExamDocument is exported

@Schema()
export class Exam {
  @Prop({ required: true })
  academicYear!: string;

  @Prop({ required: true })
  examTerm!: string;

  @Prop({ required: true })
  titleOfExam!: string;

  @Prop({ required: true })
  examDuration!: string;

  @Prop({ required: true })
  numberOfQuestions!: string;

  @Prop({ required: true })
  examDescription!: string;

  @Prop({ required: true })
  examTiming!: string;

  @Prop({ required: true })
  examClass!: string;
}

export const ExamSchema = SchemaFactory.createForClass(Exam);
