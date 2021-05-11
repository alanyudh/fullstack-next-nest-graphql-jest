import { Test } from '@nestjs/testing';
import { BooksService } from './books.service';
import { Book } from './models/book.entity';
import { Repository } from 'typeorm';
import { getRepositoryToken } from '@nestjs/typeorm';

describe('BooksService', () => {
  let service: BooksService;
  let repo: Repository<Book>;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
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
    repo = moduleRef.get<Repository<Book>>(getRepositoryToken(Book));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('findAll', () => {
    it('should return an array of books', async () => {
      const result = [
        { id: 'asd1', title: '12314', description: '1234', year: 2009 },
      ];

      jest.spyOn(repo, 'find').mockImplementation(async () => await result);

      expect(await service.findAll()).toBe(result);
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

      jest.spyOn(repo, 'findOne').mockImplementation(async () => await result);

      expect(await service.findOne({ bookId: result.id })).toBe(result);
    });
  });
});
