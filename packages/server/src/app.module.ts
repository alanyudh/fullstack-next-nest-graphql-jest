import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { BooksModule } from './modules/books/books.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import 'dotenv/config';

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: true,
    }),
    TypeOrmModule.forRoot({
      type: 'mongodb',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT),
      database: process.env.DB_DATABASE,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSOWRD,
      synchronize: false,
      autoLoadEntities: true,
    }),
    BooksModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
