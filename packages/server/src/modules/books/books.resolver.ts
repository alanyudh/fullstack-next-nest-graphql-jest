import { Resolver, Query, Args } from '@nestjs/graphql';
import { Book } from './models/book.entity';
import { BooksService } from './books.service';
import { GetBookArgs } from './dto/args/get-book.args';

@Resolver(() => Book)
export class BooksResolver {
  constructor(private readonly booksService: BooksService) {}

  @Query(() => Book, { name: 'book', nullable: true })
  async getBook(@Args() getBookArgs: GetBookArgs): Promise<Book> {
    return await this.booksService.findOne(getBookArgs);
  }

  @Query(() => [Book], { name: 'books' })
  async getBooks(): Promise<Book[]> {
    return await this.booksService.findAll();
  }
}
