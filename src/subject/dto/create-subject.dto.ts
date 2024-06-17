import { IsString, IsNotEmpty, IsNumber, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateSubjectDto {
  @ApiProperty({ description: 'Name of the subject' })
  @IsString()
  @IsNotEmpty()
  subjectName!: string;

  @ApiProperty({ description: 'Unique code of the subject' })
  @IsString()
  @IsNotEmpty()
  subjectCode!: string;

  @ApiProperty({ description: 'Credits for the subject' })
  @IsNumber()
  @IsNotEmpty()
  subjectCredits!: string;

  @ApiProperty({
    description: 'Assigned teacher for the subject',
    required: false,
  })
  @IsString()
  @IsOptional()
  teacherAssign?: string;

  @ApiProperty({ description: 'Description of the subject', required: false })
  @IsString()
  @IsOptional()
  subjectDescription?: string;
}
