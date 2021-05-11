import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

describe('Books (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('QUERY /books should retrieve array of books', () => {
    return request(app.getHttpServer())
      .post('/graphql')
      .send({
        operationName: null,
        variables: {},
        query: '{ books {id, title, description, year} }',
      })
      .expect(200)
      .then((response) => {
        const books = response.body?.data?.books;
        expect(Array.isArray(books)).toBeTruthy();
        expect(books[0]).toEqual(
          expect.objectContaining({
            id: expect.any(String),
            title: expect.any(String),
            description: expect.any(String),
            year: expect.any(Number),
          }),
        );
      });
  });
});
