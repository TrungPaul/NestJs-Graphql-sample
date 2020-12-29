import { Column, Entity, ObjectIdColumn } from 'typeorm';

@Entity()
export class Student {
  @ObjectIdColumn()
  _id: string;

  @Column()
  firstname: string;

  @Column()
  lastname: string;
}
