import { CreateLessonDto } from './dto/create-lesson.dto';
import { LessonService } from './lesson.service';
import { Lesson } from './lesson.entity';
import { LessonType } from './lesson.type';
import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';

@Resolver((of) => LessonType)
export class LessonResolver {
  constructor(private lessonService: LessonService) {}
  @Query((returns) => [LessonType])
  getLesson() {
    return this.lessonService.getLesson();
  }

  @Mutation((returns) => LessonType)
  createLesson(
    @Args('createLessonDto') createLessonDto: CreateLessonDto,
  ): Promise<Lesson> {
    return this.lessonService.createlesson(createLessonDto);
  }
}
