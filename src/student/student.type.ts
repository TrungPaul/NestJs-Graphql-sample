import { ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType()
export class StudentType {
  @Field((type) => ID)
  _id: string;

  @Field()
  firstname: string;

  @Field()
  lastname: string;
}
