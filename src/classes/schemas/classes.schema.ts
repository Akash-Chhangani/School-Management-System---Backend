import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ClassesDocument = Classes & Document;

@Schema()
export class Classes {
  [x: string]: any;
  @Prop({ required: true })
  academicYear: string;

  @Prop({ required: true })
  className: string;

  @Prop({ required: true })
  capacity: string;

  @Prop({ required: true })
  boys: string;

  @Prop({ required: true })
  girls: string;

  @Prop({ required: true })
  classTeacherAssign: string;

  @Prop()
  description: string;
}

export const ClassesSchema = SchemaFactory.createForClass(Classes);
