import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type SubjectDocument = Subject & Document;

@Schema()
export class Subject {
  @Prop({ required: true })
  subjectName: string = '';

  @Prop({ required: true, unique: true })
  subjectCode: string = '';

  @Prop({ required: true })
  subjectCredits: string = '';
  @Prop()
  teacherAssign: string = '';

  @Prop()
  subjectDescription: string = '';
}

export const SubjectSchema = SchemaFactory.createForClass(Subject);
