import * as mongoose from 'mongoose';
import { fileURLToPath } from 'url';

export const StudentSchema = new mongoose.Schema({
  nameOfStudent: { type: String, required: true },
  studentEmail: { type: String, required: true, unique: true },
  studentRollNo: { type: String, required: true, unique: true },
  gender: { type: String, required: true },
  studentClass: { type: String, required: true },
  // photo: { type: String } ,
  fileurl: { type: String },
});
