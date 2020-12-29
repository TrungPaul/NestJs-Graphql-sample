import { createStudentInput } from './create-student.input';
import { Student } from './student.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';

@Injectable()
export class StudentService {
  constructor(
    @InjectRepository(Student)
    private studentRepository: Repository<Student>,
  ) {}

  async createStudent(createStudentInput: createStudentInput) {
    const student = this.studentRepository.create(createStudentInput);
    const result = await this.studentRepository.save(student);

    return {
      _id: result._id,
      firstname: result.firstname,
      lastname: result.lastname,
    };
  }
}
