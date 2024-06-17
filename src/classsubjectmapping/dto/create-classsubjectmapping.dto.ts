import { IsArray, IsNotEmpty, IsString, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

class SubjectIdDto {
  @IsString()
  @IsNotEmpty()
  id: string;
}

export class CreateClasssubjectmappingDto {
  @IsString()
  @IsNotEmpty()
  classId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => SubjectIdDto)
  subjectIds: SubjectIdDto[];
}
