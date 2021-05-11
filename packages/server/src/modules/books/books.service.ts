import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Book } from './models/book.entity';
import { GetBookArgs } from './dto/args/get-book.args';
import { Repository } from 'typeorm';

@Injectable()
export class BooksService {
  constructor(
    @InjectRepository(Book)
    private booksRepository: Repository<Book>,
  ) {}

  findAll(): Promise<Book[]> {
    return this.booksRepository.find();
  }

  findOne(getBookArgs: GetBookArgs): Promise<Book> {
    return this.booksRepository.findOne(getBookArgs.bookId);
  }
}
