import { IsString, IsEmail, IsEnum } from 'class-validator';

export class CreateStudentDto {
  @IsString()
  nameOfStudent: string;

  @IsEmail()
  studentEmail: string;

  @IsString()
  studentRollNo: string;

  // @IsEnum(['Male', 'Female', 'Other'])
  @IsString()
  gender: string;

  @IsString()
  studentClass: string;

  // @IsString()
  // photo?: string;  // Optional field

  @IsString()
  fileurl: string;
}
