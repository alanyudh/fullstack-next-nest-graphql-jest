import { Module } from '@nestjs/common';
import { BooksResolver } from './books.resolver';
import { BooksService } from './books.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Book } from './models/book.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Book])],
  providers: [BooksResolver, BooksService],
})
export class BooksModule {}
