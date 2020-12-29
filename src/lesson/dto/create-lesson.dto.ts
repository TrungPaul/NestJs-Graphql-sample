import { Injectable } from '@nestjs/common';
import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { IsDateString, IsNotEmpty, MinLength } from 'class-validator';

// @InputType()
@Injectable()
@InputType()
export class CreateLessonDto {
  @MinLength(4)
  @Field()
  name: string;

  @Field()
  @IsDateString()
  startDate: string;

  @Field()
  @IsDateString()
  endDate: string;
}
