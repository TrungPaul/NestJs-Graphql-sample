import { CreateLessonDto } from './dto/create-lesson.dto';
import { Lesson } from './lesson.entity';
import { InjectRepository, TypeOrmModule } from '@nestjs/typeorm';
import { LessonResolver } from './lesson.resolver';
import { Module } from '@nestjs/common';
import { LessonService } from './lesson.service';
import { Repository } from 'typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Lesson])],
  providers: [LessonResolver, LessonService],
})
export class LessonModule {}
