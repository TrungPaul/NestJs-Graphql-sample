import { CreateLessonDto } from './dto/create-lesson.dto';
import { Lesson } from './lesson.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';

@Injectable()
export class LessonService {
  constructor(
    @InjectRepository(Lesson)
    private lessonRepository: Repository<Lesson>,
  ) {}

  async getLesson(): Promise<Lesson[]> {
    return this.lessonRepository.find();
  }

  async createlesson(createLessonDto: CreateLessonDto): Promise<Lesson> {
    const lesson = this.lessonRepository.create(createLessonDto);
    const result = await this.lessonRepository.save(lesson);
    return {
      _id: result._id,
      name: result.name,
      startDate: result.startDate,
      endDate: result.endDate,
    };
  }
}
