import { Test } from '@nestjs/testing';
import { BooksResolver } from './books.resolver';
import { BooksService } from './books.service';
import { Book } from './models/book.entity';
import { Repository } from 'typeorm';
import { getRepositoryToken } from '@nestjs/typeorm';

describe('BooksResolver', () => {
  let resolver: BooksResolver;
  let service: BooksService;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        BooksResolver,
        BooksService,
        {
          // how you provide the injection token in a test instance
          provide: getRepositoryToken(Book),
          // as a class value, Repository needs no generics
          useClass: Repository,
        },
      ],
    }).compile();

    service = moduleRef.get<BooksService>(BooksService);
    resolver = moduleRef.get<BooksResolver>(BooksResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });

  describe('getBooks', () => {
    it('should return an array of books', async () => {
      const result = [
        { id: 'asd1', title: '12314', description: '1234', year: 2009 },
      ];

      jest
        .spyOn(service, 'findAll')
        .mockImplementation(async () => await result);

      expect(await resolver.getBooks()).toBe(result);
    });
  });

  describe('getBook', () => {
    it('should return a single book', async () => {
      const result = {
        id: 'asd1',
        title: '12314',
        description: '1234',
        year: 2009,
      };

      jest
        .spyOn(service, 'findOne')
        .mockImplementation(async () => await result);

      expect(await resolver.getBook({ bookId: result.id })).toBe(result);
    });
  });
});
