import { Injectable } from '@nestjs/common';
import { Field, InputType } from '@nestjs/graphql';
import { MinLength } from 'class-validator';

@Injectable()
@InputType()
export class createStudentInput {
  @Field()
  @MinLength(6)
  firstname: string;

  @Field()
  @MinLength(6)
  lastname: string;
}
