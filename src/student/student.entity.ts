import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Student {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column()
  name!: string;

  @Column()
  studentEmail!: string;

  @Column()
  studentRollNo!: string;

  @Column()
  gender!: string;

  @Column()
  studentClass!: string;
}
