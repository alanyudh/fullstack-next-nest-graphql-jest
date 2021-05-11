import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Entity, Column, ObjectIdColumn } from 'typeorm';
import { IBook } from '@books/common';

@Entity('books')
@ObjectType()
export class Book implements IBook {
  @ObjectIdColumn()
  @Field()
  id: string;

  @Column()
  @Field()
  title: string;

  @Column()
  @Field()
  description: string;

  @Column()
  @Field(() => Int)
  year: number;
}
