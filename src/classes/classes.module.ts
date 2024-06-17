
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ClassesService } from './classes.service';
import { ClassesController } from './classes.controller';
import { Classes, ClassesSchema } from './schemas/classes.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Classes.name, schema: ClassesSchema }])],
  controllers: [ClassesController],
  providers: [ClassesService],
})
export class ClassesModule {}
